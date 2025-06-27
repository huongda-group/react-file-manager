import { api } from "./api";
export const getAllFilesAPI = async () => {
    try {
        const response = await api.get("/files");
        return response;
    }
    catch (error) {
        return error;
    }
};
