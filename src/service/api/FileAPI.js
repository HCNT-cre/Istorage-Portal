
const API_SEARCH = import.meta.env.VITE_API_SEARCH;
import axiosHttpService from "src/utils/axiosHttpService";

const FileAPI = {
    getFileByTitle: async (title) => {
        const response = await axiosHttpService.post(`${API_SEARCH}`,
            {
                query: title
            })
        return response.data;
    }
}

export default FileAPI;
