import { IFile } from "../types";

export const duplicateNameHandler = (
  originalFileName: string,
  isDirectory: boolean,
  files: IFile[]
): string => {
  if (files.find((f) => f.name === originalFileName)) {
    const fileExtension = isDirectory
      ? ""
      : "." + originalFileName.split(".").pop();
    const fileName = isDirectory
      ? originalFileName
      : originalFileName.split(".").slice(0, -1).join(".");

    // Generating new file name for duplicate file
    let maxFileNum = 0;
    const fileNameRegex = new RegExp(`${fileName} \\(\\d+\\)`);

    files.forEach((f) => {
      const fName = f.isDirectory
        ? f.name
        : f.name.split(".").slice(0, -1).join(".");
      if (fileNameRegex.test(fName)) {
        const fileNumStr = fName.split(`${fileName} (`).pop()?.slice(0, -1);
        const fileNum = fileNumStr ? parseInt(fileNumStr) : NaN;
        if (!isNaN(fileNum) && fileNum > maxFileNum) {
          maxFileNum = fileNum;
        }
      }
    });

    return fileName + ` (${++maxFileNum})` + fileExtension;
  } else {
    return originalFileName;
  }
};
