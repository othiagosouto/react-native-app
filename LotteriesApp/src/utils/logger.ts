// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logError = (tag: string, message: string, error: any) =>
  console.error(tag, message, error);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logDebug = (tag: string, message: string, extras?: any) =>
  console.debug(tag, message, extras);

