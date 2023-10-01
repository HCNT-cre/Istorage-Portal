
import axiosHttpService from "src/utils/httpService";

const API_GOV_FILE_GET_ALL = import.meta.env.VITE_API_GOV_FILE_GET_ALL;
const API_GOV_FILE_SEARCH = import.meta.env.VITE_API_GOV_FILE_GET_ALL;

const FileAPIService = {
    getFileByTitle: async (title) => {
        const response = await axiosHttpService.get(`${API_GOV_FILE_SEARCH}1&title=${title}`)
        return response.data;
    },

    getFileById: async (id) => {
        const response = await axiosHttpService.get(`${API_GOV_FILE_GET_ALL}1&id=${id}`)
        return response.data;
    },

    searchFile: async (params) => {
        let request = API_GOV_FILE_SEARCH + 1;
        Object.keys(params).forEach((key) => {
            if (key === "state" && (params[key] === 0 || params[key] === "Tất cả"))
                return;
            const value = params[key];
            if ((value !== null) & (value !== ""))
                request += "&" + key + "=" + value;
        });
        const response = await axiosHttpService.get(request);
        return response.data;
    },

    getAllFile: async () => {
        const response = await axiosHttpService.get(API_GOV_FILE_GET_ALL + 1);
        return response.data;
    },

}

export default FileAPIService;
