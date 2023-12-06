import { LOGIN, LOGOUT, REGISTER, FORGOT_PASSWORD } from "../key"
const INITIAL_STATE = {
    isLogin: false,
    mail: null,
    name: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    console.log(state);
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                mail: action.payload.mail,
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
            }
        case REGISTER:
            return null
        case FORGOT_PASSWORD:
            return null
        default:
            return state
    }
}

export default userReducer
