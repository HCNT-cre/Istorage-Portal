export const Login = (mail) => {
    return {
        type: 'LOGIN',
        payload: {
            mail,
        },
    }
}

export const Logout = () => {
    return {
        type: 'LOGOUT',
    }
}
