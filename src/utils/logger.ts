import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty', // use 'pino/file' for production
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  },
});

export default logger;
