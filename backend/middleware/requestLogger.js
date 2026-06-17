const { logRequest } = require('../logger');

/**
 * Middleware to log every incoming HTTP request
 * Logs to the dedicated requests log file using the existing logger.js
 */
const requestLogger = (req, res, next) => {
  // Capture the start time for calculating response time
  const startTime = Date.now();

  // Function to log the request after response finishes
  const logResponse = () => {
    // Remove event listeners to prevent memory leaks
    res.removeListener('finish', logResponse);
    res.removeListener('close', logResponse);

    // Calculate response time
    const responseTime = Date.now() - startTime;

    // Call the logRequest function from logger.js
    logRequest({
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('user-agent') || 'Unknown',
      referer: req.get('referer') || 'Direct',
      timestamp: new Date(),
      responseTime: responseTime,
      contentLength: res.get('content-length') || 0,
      protocol: req.protocol,
      host: req.get('host'),
      body: req.body,
    });
  };

  // Set up event listeners for when response finishes
  res.on('finish', logResponse);
  res.on('close', logResponse);

  next();
};

module.exports = requestLogger;