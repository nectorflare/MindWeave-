import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import requestLogger from './middlewares/requestLogger';
import './logger';
import routes from './routes';
import internalRoutes from './routes/internal';
import { authenticate } from './config/database';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(requestLogger);
app.use('/api', routes);
app.use('/internal/v1', internalRoutes);

app.get('/health', (_req, res) => {
  res.json({ service: 'academic-service', status: 'ok' });
});

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'ROUTE_NOT_FOUND', message: 'Route not found' }
  });
});

app.use(errorHandler);

const start = async () => {
  try {
    await authenticate();
    app.listen(port, () => {
      console.log(`academic-service listening on ${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

void start();
