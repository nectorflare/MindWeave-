const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config();
const db = require('./config/database');
const routes = require('./routes');
const requestLogger = require('./middleware/requestLogger')
require('./logger');
require('./models/User');
// const setupAssociations = require('./models/associations');
// const dbsync = require('./models/models');

// Sync all models

// dbsync.sequelize.sync()
//   .then(() => {
//     console.log('Database synced successfully');
//   })
//   .catch(err => {
//     console.error('Database sync error:', err);
//   });
// setupAssociations();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:3000',
  // 'https://server.nirmaankarwao.com/',
  // 'https://www.server.nirmaankarwao.com/'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`❌ CORS blocked: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// ✅ Apply CORS middleware
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
// Routes
app.use('/api', routes);

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Something went wrong!' });
});

db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    return db.sequelize.sync().then(() => {
      console.log('Database synced successfully');
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    });
  })
  .catch(err => console.error('Unable to connect to the database:', err));
// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server gracefully...');
  process.exit(0);
});
process.on('SIGTERM', () => {
  console.log('\n🛑 Server terminated');
  process.exit(0);
});
