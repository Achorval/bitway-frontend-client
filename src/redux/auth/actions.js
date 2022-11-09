const authActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    
    login: (data) => {
        return {
            type: authActions.LOGIN,
            isLogin: true,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            userData: data.userData
        };
    },
    logout: () => {
        return {
            type: authActions.LOGOUT,
            isLogin: false,
            accessToken: null
        };
    }
}

export default authActions