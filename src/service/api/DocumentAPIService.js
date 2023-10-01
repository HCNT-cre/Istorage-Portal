
import axiosHttpService from "src/utils/httpService";
const API_GOV_FILE_GET_ALL = import.meta.env.VITE_API_GOV_FILE_GET_ALL;
const API_GOV_FILE_SEARCH = import.meta.env.VITE_API_GOV_FILE_GET_ALL;
const API_SEARCH = import.meta.env.VITE_API_SEARCH;

const DocumentAPIService = {
    getDocumentByTitle: async (title) => {
        const response = await axiosHttpService.post(`${API_SEARCH}`,
            {
                query: title
            })
        return response.data;
    },

    getDocumentById: async (id) => {
        const response = await axiosHttpService.get(`${API_SEARCH}/${id}`)
        return response.data;
    }
}

export default DocumentAPIService;
