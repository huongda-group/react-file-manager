import { axiosClient } from "./axios-client";
import { IFile } from "../types";

export const downloadFile = async (files: IFile[]): Promise<void> => {
  try {
    for (const file of files) {
      // Using window.open or creating a link is better for browser download than axios for simple files
      // But if auth is needed, axios blob is needed.
      // Assuming public for now or same-origin session
      const response = await axiosClient.get(`/${file._id}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', file.name);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    }
  } catch (error: any) {
    console.error("Download failed", error);
  }
};
