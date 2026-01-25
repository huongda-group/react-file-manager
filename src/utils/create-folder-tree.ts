import { IFile } from "../types";

export const createFolderTree = (copiedFile: IFile, files: IFile[]): IFile => {
  return {
    ...copiedFile,
    children: files
      .filter((f) => f.path === copiedFile.path + "/" + copiedFile.name)
      .map((f) => createFolderTree(f, files)),
  };
};
