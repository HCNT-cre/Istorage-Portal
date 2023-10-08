import { ADD_DOC_TO_CART, ADD_FILE_TO_CART, REMOVE_DOC_FROM_CART, REMOVE_FILE_FROM_CART } from "../key"
import update from 'immutability-helper';

const INITIAL_STATE = {
    cart: [],
    userId: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { payload = {} } = action;
    const { file, doc } = payload;

    switch (action.type) {
        case ADD_FILE_TO_CART: {
            const { id } = file
            const existingFileIndex = state.cart.findIndex(file => file.id === id);
            if (existingFileIndex !== -1) {
                return update(state, {
                    cart: {
                        [existingFileIndex]: {
                            docs: { $set: doc },
                        }
                    }
                })
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { id, data: file, docs: doc }]
                };
            }
        }

        case ADD_DOC_TO_CART: {
            const { id } = file
            const existingFileIndex = state.cart.findIndex(file => file.id === id);
            if (existingFileIndex !== -1) {
                const existingDocIndex = state.cart[existingFileIndex].docs.findIndex(id => id === doc.id);
                if (existingDocIndex !== -1) {
                    return state;
                }
                return update(state, {
                    cart: {
                        [existingFileIndex]: {
                            docs: { $push: [doc] }
                        }
                    }
                });
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart, { file, docs: [doc] }]
                };
            }
        }

        case REMOVE_DOC_FROM_CART: {
            const { id } = file
            const { idDoc } = doc
            return update(state, {
                cart: {
                    [state.cart.findIndex(file => file.id === id)]: {
                        docs: { $splice: [[state.cart[state.cart.findIndex(file => file.id === id)].docs.findIndex(doc => doc.id === idDoc), 1]] }
                    }
                }
            })
        }

        case REMOVE_FILE_FROM_CART: {
            const { id } = file
            return {
                ...state,
                cart: state.cart.filter(file => file.id !== id)
            }
        }

        default:
            return state;
    }
}

export default cartReducer;
