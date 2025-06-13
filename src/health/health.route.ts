import { Router } from 'express';

import { healthController } from './health.controller';

const healthRouter = Router();

healthRouter.get('/', healthController);

export default healthRouter;
