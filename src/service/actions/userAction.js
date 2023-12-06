export const Login = (mail) => {
    console.log(mail);
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
