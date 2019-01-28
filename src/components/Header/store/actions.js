import { USER_LOGIN, EXIT_LOGIN } from './constants';
// 用户登录
const userLogin = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}
// 用户退出
const exitLogin = (payload) => {
    return {
        type: EXIT_LOGIN,
        payload
    }
}


export const userToLogin = () => {
    return (dispatch, getState, AxiosInstance) => {
        return AxiosInstance.get('/api/users/login').then(res => {
            dispatch(userLogin(res.data.data));
        })
    }
}

export const userExitLogin = () => {
    return (dispatch, getState, AxiosInstance) => {
        return AxiosInstance.post('/api/users/exit').then(res => {
            dispatch(
                exitLogin(payload)
            )
        })
    }
}