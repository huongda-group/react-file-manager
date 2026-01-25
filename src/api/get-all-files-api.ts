import { axiosClient } from "./axios-client";
import { IApiResponse, IFile } from "../types";

export const getAllFilesAPI = async (): Promise<IApiResponse<IFile[]>> => {
  try {
    const response = await axiosClient.get<IFile[]>("/");
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      message: error.message,
      data: [],
    };
  }
};
