const fs = require('fs');
const path = require('path');

// Create log directory if it doesn't exist
const logDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Create requests log subdirectory
const requestLogDir = path.join(logDir, 'requests');
if (!fs.existsSync(requestLogDir)) {
  fs.mkdirSync(requestLogDir, { recursive: true });
}

// Create write streams
const appLogStream = fs.createWriteStream(path.join(logDir, 'app.log'), { flags: 'a' });
const errorLogStream = fs.createWriteStream(path.join(logDir, 'error.log'), { flags: 'a' });
const sqlLogStream = fs.createWriteStream(path.join(logDir, 'sql.log'), { flags: 'a' });

// ✅ Create dedicated request log stream (requests only)
const requestLogStream = fs.createWriteStream(
  path.join(requestLogDir, 'requests.log'),
  { flags: 'a' }
);

// Timestamp function
const getTimestamp = () => new Date().toISOString();

// Helper function to stringify objects deeply
const stringifyArgs = (args) => {
  return args.map(arg => {
    // Handle Sequelize instances and other complex objects
    if (arg && typeof arg === 'object') {
      // Check if it's a Sequelize instance
      if (arg.constructor && arg.constructor.name === 'Model' ||
          arg.constructor && arg.constructor.name.includes('Sequelize')) {
        // Convert to plain object to get the actual data
        try {
          return JSON.stringify(arg.toJSON ? arg.toJSON() : arg, null, 2);
        } catch (err) {
          // Fallback if toJSON fails
          try {
            return JSON.stringify(arg, getCircularReplacer(), 2);
          } catch (e) {
            return String(arg);
          }
        }
      }
      // Handle regular objects
      try {
        return JSON.stringify(arg, getCircularReplacer(), 2);
      } catch (err) {
        return String(arg);
      }
    }
    // Handle non-objects (strings, numbers, etc.)
    return arg;
  });
};

// Handle circular references in objects
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular Reference]";
      }
      seen.add(value);
    }
    return value;
  };
};

// Format message with timestamp
const formatMessage = (...args) => {
  const stringifiedArgs = stringifyArgs(args);
  return `[${getTimestamp()}] ${stringifiedArgs.join(' ')}`;
};

// ✅ Request logging function (used by the middleware)
const logRequest = (requestData) => {
  // Destructure with default values for all possible properties
  const {
    method,
    url,
    statusCode,
    ip,
    responseTime,
    timestamp = new Date(),
    userAgent = 'Unknown',
    referer = 'Direct',
    contentLength = 0,
    protocol,   // Added
    host,        // Added
    body,
  } = requestData;

  // Create a more detailed log entry
  let logEntry = `[${timestamp.toISOString()}] ${method} ${url} - ${statusCode} - ${responseTime}ms`;

  // Add size if available
  if (contentLength) {
    logEntry += ` - ${contentLength} bytes`;
  }

  // Add IP
  logEntry += ` - IP: ${ip}`;



  // Add protocol and host if available
  if (protocol && host) {
    logEntry += ` - ${protocol.toUpperCase()}://${host}`;
  }

  // Add user agent if it's not the default
  if (userAgent !== 'Unknown') {
    // Trim user agent to avoid very long lines
    const shortUserAgent = userAgent.length > 50 ? userAgent.substring(0, 50) + '...' : userAgent;
    logEntry += ` - UA: ${shortUserAgent}`;
  }

  // Add referer if it's not the default
  if (referer !== 'Direct') {
    logEntry += ` - Referer: ${referer}`;
  }

  logEntry += ` body: ${stringifyArgs([body]).join(' ')}`

  logEntry += '\n';


  // Write to the dedicated requests log file
  requestLogStream.write(logEntry);

  // Optional: Also log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[REQUEST] ${method} ${url} - ${statusCode} - ${responseTime}ms`);
  }
};

// Override console.log
const originalConsoleLog = console.log;
console.log = (...args) => {
  const msg = formatMessage(...args);
  appLogStream.write(msg + '\n');
  originalConsoleLog(...args);
};

// Override console.error
const originalConsoleError = console.error;
console.error = (...args) => {
  const msg = formatMessage(...args);
  appLogStream.write(msg + '\n');
  errorLogStream.write(msg + '\n');
  originalConsoleError(...args);
};

// Override console.warn
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  const msg = formatMessage(...args);
  appLogStream.write(msg + '\n');
  originalConsoleWarn(...args);
};

// SQL logger function (for Sequelize)
const sqlLogger = (sql, timing) => {
  const timestamp = getTimestamp();
  const logEntry = `[${timestamp}] ${sql} ${timing !== undefined ? `- ${timing}ms` : ''}\n`;
  sqlLogStream.write(logEntry);

  // Optional: Only log to console in development
  if (process.env.NODE_ENV !== 'production') {
    originalConsoleLog(`[SQL] ${sql}`);
  }
};

module.exports = {
  sqlLogger,
  logRequest, // Export the request logging function for middleware
  // Export if you need direct access to streams
  streams: {
    app: appLogStream,
    error: errorLogStream,
    sql: sqlLogStream,
    request: requestLogStream
  }
};