import { api } from "./api";
import { AxiosResponse, AxiosError } from "axios";

export const getAllFilesAPI = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await api.get("/files");
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};
