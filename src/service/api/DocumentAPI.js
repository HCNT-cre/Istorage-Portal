
const API_GOV_FILE_SEARCH = import.meta.env.VITE_API_GOV_FILE_GET_ALL;

import axiosHttpService from "src/utils/axiosHttpService";
const DocumentAPI = {
    getDocumentByTitle: async (title) => {
        const response = await axiosHttpService.get(`${API_GOV_FILE_SEARCH}1&title=${title}`)
        return response.data;
    }
}

export default DocumentAPI;
