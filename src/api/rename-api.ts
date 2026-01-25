import { axiosClient } from "./axios-client";
import { IApiResponse, IFile } from "../types";

export const renameAPI = async (
  id: string,
  newName: string
): Promise<IApiResponse<IFile>> => {
  try {
    const response = await axiosClient.put<IFile>(`/${id}`, {
      name: newName,
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
