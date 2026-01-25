import { axiosClient } from "./axios-client";
import { IApiResponse, IFile } from "../types";

export const createFolderAPI = async (
  name: string,
  parentId?: string
): Promise<IApiResponse<IFile>> => {
  try {
    const response = await axiosClient.post<IFile>("/", {
      name,
      parentId,
      isDirectory: true,
    });
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};
