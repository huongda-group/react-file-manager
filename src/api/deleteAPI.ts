import { api } from "./api";
import { AxiosResponse } from "axios";

export const deleteAPI = async (ids: string[]): Promise<AxiosResponse> => {
  const response = await api.delete("", { data: { ids: ids } });
  return response;
};
