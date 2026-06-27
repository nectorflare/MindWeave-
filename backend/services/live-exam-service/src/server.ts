import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ service: 'live-exam-service', status: 'ok' });
});

app.listen(port, () => {
  console.log(`live-exam-service listening on ${port}`);
});
