export interface IFile {
  _id: string;
  name: string;
  isDirectory: boolean;
  path: string;
  updatedAt: string;
  size?: number;
  [key: string]: any; // Allow for other properties likely present but not strictly validated yet
}

export interface IFolder extends IFile {
  isDirectory: true;
}

export interface IApiResponse<T = any> {
  status: number;
  data?: T;
  message?: string;
  [key: string]: any;
}

export interface IFileMovePayload {
  files: IFile[];
  destination: IFolder;
}
