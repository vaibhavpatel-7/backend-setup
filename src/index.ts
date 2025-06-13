import cors from 'cors';
import Express from 'express';

import healthRouter from './health/health.route';
import { httpLogger } from './middleware/logger.middleware';

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(Express.json());
app.use(httpLogger);

// Routes
app.use('/health', healthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
