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


export const userToLogin = (data) => {
    return (dispatch, getState, AxiosInstance) => {
        return AxiosInstance.post('/api/users/login', data).then(res => {
            dispatch(userLogin(res.data));
        })
    }
}

export const userExitLogin = (data) => {
    return (dispatch, getState, AxiosInstance) => {
        return AxiosInstance.post('/api/users/exit', data).then(res => {
            dispatch(
                exitLogin(res.data)
            )
        })
    }
}