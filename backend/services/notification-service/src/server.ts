import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'notification-service', status: 'ok' });
});

app.listen(port, () => {
  console.log(`notification-service listening on ${port}`);
});
