import { api } from "./api";
import { AxiosResponse, AxiosError } from "axios";

export const createFolderAPI = async (
  name: string,
  parentId?: string | null
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await api.post("/folder", { name, parentId });
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};
