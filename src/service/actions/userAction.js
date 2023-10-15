export const Login = (mail, name) => {
    return {
        type: 'LOGIN',
        payload: {
            mail,
            name,
        },
    }
}

export const Logout = () => {
    return {
        type: 'LOGOUT',
    }
}
