import logger from '../utils/logger';

import type { Request, Response } from 'express';

const log = logger.child({ module: 'healthController' });

export const healthController = (req: Request, res: Response) => {
  log.info({ url: req.url });
  res.status(200).json({
    status: 'ok',
    message: 'server is up',
    timestamp: new Date().toISOString(),
  });
};
