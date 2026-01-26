export const validateApiCallback = (
  callback: Function | undefined,
  callbackName: string,
  ...args: any[]
): any => {
  try {
    if (typeof callback === "function") {
      return callback(...args);
    } else {
      throw new Error(
        `<FileManager /> Missing prop: Callback function "${callbackName}" is required.`
      );
    }
  } catch (error: any) {
    console.error(error.message);
  }
};
