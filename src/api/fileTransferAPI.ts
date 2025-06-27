import { api } from "./api";
import { AxiosResponse } from "axios";

export const copyItemAPI = async (
  sourceIds: string[],
  destinationId?: string | null
): Promise<AxiosResponse> => {
  const response = await api.post("/copy", { sourceIds, destinationId });
  return response;
};

export const moveItemAPI = async (
  sourceIds: string[],
  destinationId?: string | null
): Promise<AxiosResponse> => {
  const response = await api.put("/move", { sourceIds, destinationId });
  return response;
};
