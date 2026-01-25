import { axiosClient } from "./axios-client";
import { IApiResponse } from "../types";

export const deleteAPI = async (ids: string[]): Promise<IApiResponse> => {
  try {
    await Promise.all(ids.map((id) => axiosClient.delete(`/${id}`)));
    return {
      status: 200,
      message: "Deleted successfully",
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};
