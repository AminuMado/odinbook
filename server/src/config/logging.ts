const info = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.info(`[${getTime()}] [INFO] [${namespace}] ${message}`, object);
  } else {
    console.info(`[${getTime()}] [INFO] [${namespace}] ${message}`);
  }
};

const warn = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.warn(`[${getTime()}] [WARN] [${namespace}] ${message}`, object);
  } else {
    console.warn(`[${getTime()}] [WARN] [${namespace}] ${message}`);
  }
};

const error = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.error(`[${getTime()}] [ERROR] [${namespace}] ${message}`, object);
  } else {
    console.error(`[${getTime()}] [ERROR] [${namespace}] ${message}`);
  }
};

const debug = (namespace: string, message: string, object?: any) => {
  if (object) {
    console.debug(`[${getTime()}] [DEBUG] [${namespace}] ${message}`, object);
  } else {
    console.debug(`[${getTime()}] [DEBUG] [${namespace}] ${message}`);
  }
};

const getTime = (): string => {
  return new Date().toLocaleString();
};

export default { info, warn, error, debug };
