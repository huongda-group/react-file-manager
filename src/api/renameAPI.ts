import { api } from "./api";
import { AxiosResponse } from "axios";

export const renameAPI = async (
  id: string,
  newName: string
): Promise<AxiosResponse> => {
  const response = api.patch("/rename", {
    id,
    newName,
  });
  return response;
};
