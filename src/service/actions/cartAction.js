import { ADD_DOC_TO_CART, ADD_FILE_TO_CART, REMOVE_DOC_FROM_CART, REMOVE_FILE_FROM_CART } from "../key"
import DocumentAPIService from "../api/DocumentAPIService"
export const addFileToCart = (idFile) => {
    return async (dispatch) => {
        try {
            const docs = await DocumentAPIService.getAllDocumentByFileId(idFile);
            const idDoc = docs.map(doc => doc.id);
            dispatch({
                type: ADD_FILE_TO_CART,
                payload: {
                    idFile,
                    idDoc,
                },
            });
        } catch (error) {
            console.error('Error while adding file to cart:', error);
        }
    };
};

export const addDocToCart = (idFile, idDoc) => {
    console.log(idFile, idDoc)
    return {
        type: ADD_DOC_TO_CART,
        payload: {
            idFile,
            idDoc
        }
    }
}

export const removeFileFromCart = (idFile) => {
    return {
        type: REMOVE_FILE_FROM_CART,
        payload: {
            idFile
        }
    }
}

export const removeDocFromCart = (idFile, idDoc) => {
    return {
        type: REMOVE_DOC_FROM_CART,
        payload: {
            idFile,
            idDoc
        }
    }
}
