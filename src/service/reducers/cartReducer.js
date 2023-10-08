import { ADD_DOC_TO_CART, ADD_FILE_TO_CART, REMOVE_DOC_FROM_CART, REMOVE_FILE_FROM_CART } from "../key"
import update from 'immutability-helper';

const INITIAL_STATE = {
    cart: [],
    userId: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { payload = {} } = action;
    const { idFile, idDoc } = payload;

    switch (action.type) {
        case ADD_FILE_TO_CART: {
            const existingFileIndex = state.cart.findIndex(file => file.idFile === idFile);
            if (existingFileIndex !== -1) {
                return update(state, {
                    cart: {
                        [existingFileIndex]: {
                            idDocs: { $set: idDoc }
                        }
                    }

                })
            }else {
                return {
                    ...state,
                    cart: [...state.cart, { idFile, idDocs: idDoc }]
                };
            }
        }

        case ADD_DOC_TO_CART: {
            const existingFileIndex = state.cart.findIndex(file => file.idFile === idFile);
            if (existingFileIndex !== -1) {
                const existingDocIndex = state.cart[existingFileIndex].idDocs.findIndex(id => id === idDoc);
                if (existingDocIndex !== -1) {
                    return state;
                }
                return update(state, {
                    cart: {
                        [existingFileIndex]: {
                            idDocs: { $push: [idDoc] }
                        }
                    }
                });
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, { idFile, idDocs: [idDoc] }]
                };
            }
        }
        
        case REMOVE_DOC_FROM_CART: {
            return update(state, {
                cart: {
                    [state.cart.findIndex(file => file.idFile === idFile)]: {
                        idDocs: { $splice: [[state.cart[state.cart.findIndex(file => file.idFile === idFile)].idDocs.findIndex(doc => doc.idDoc === idDoc), 1]] }
                    }
                }
            })
        }

        case REMOVE_FILE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(file => file.idFile !== idFile)
            }
        }

        default:
            return state;
    }
}

export default cartReducer;
