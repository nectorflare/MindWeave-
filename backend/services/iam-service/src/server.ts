import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authenticate, sequelize } from './config/database';
import routes from './routes';
import requestLogger from './middlewares/requestLogger';
import './logger';
import User from './models/User';
import SchoolProfile from './models/SchoolProfile';
import StudentProfile from './models/StudentProfile';

const app = express();
const port = process.env.PORT || 3001;

const allowedOrigins = [
  'http://localhost:3000'
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    console.warn(`CORS blocked: ${origin}`);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use('/api/iam', routes);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ service: 'iam-service', status: 'ok' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Something went wrong!' });
});

authenticate()
  .then(() => {
    console.log('IAM database connected successfully');
    return sequelize.sync().then(() => {
      console.log('IAM database synced successfully');
      app.listen(port, () => console.log(`IAM service running on port ${port}`));
    });
  })
  .catch(err => console.error('Unable to connect to the IAM database:', err));

process.on('SIGINT', () => {
  console.log('Shutting down IAM service gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('IAM service terminated');
  process.exit(0);
});
