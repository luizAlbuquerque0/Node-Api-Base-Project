export enum LogType {
  ERROR = 'error',
  WARNING = 'warning',
  SUCCESS = 'success'
}

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m'
};

export const log = (message: string, type: LogType = LogType.SUCCESS) => {
  const timestamp = new Date().toISOString();

  switch (type) {
    case LogType.ERROR:
      console.error(`${colors.red}[${timestamp}] [ERROR] ${message}${colors.reset}`);
      break;
    case LogType.WARNING:
      console.warn(`${colors.yellow}[${timestamp}] [WARNING] ${message}${colors.reset}`);
      break;
    case LogType.SUCCESS:
      console.log(`${colors.green}[${timestamp}] [SUCCESS] ${message}${colors.reset}`);
      break;
    default:
      console.log(`[${timestamp}] ${message}`);
  }
};
