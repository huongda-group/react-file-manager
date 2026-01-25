import { axiosClient } from "./axios-client";
import { IApiResponse, IFile } from "../types";

export const moveItemAPI = async (
  ids: string[],
  destinationId?: string
): Promise<IApiResponse> => {
  try {
    await Promise.all(
      ids.map((id) =>
        axiosClient.put<IFile>(`/${id}`, {
          parentId: destinationId,
        })
      )
    );
    return {
      status: 200,
      message: "Moved successfully",
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};

export const copyItemAPI = async (
  ids: string[],
  destinationId?: string
): Promise<IApiResponse> => {
  try {
    // Assuming Copy is checking each ID and creating a new one with same content
    // Strict REST 'Create POST /'
    // This is tricky without a specific 'copy' endpoint or knowing backend logic.
    // I will assume for now we send a POST with 'copyFrom' or similar if strictly following 'POST /'
    // But since I control the frontend only and assume a standard REST backend:
    // I'll leave a TODO or implement best guess: POST / with { copyFrom: id, parentId: destinationId }
    await Promise.all(
      ids.map((id) =>
        axiosClient.post<IFile>("/", {
          copyFrom: id,
          parentId: destinationId,
        })
      )
    );
    return {
      status: 200,
      message: "Copied successfully",
    };
  } catch (error: any) {
    return {
      status: error.response?.status || 500,
      message: error.message,
    };
  }
};
