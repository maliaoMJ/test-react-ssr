import { CHANGE_LIST } from './constants'
const changeList = (payload) => ({
    type: CHANGE_LIST,
    payload
});
export const getHomeList = () => {
    return (dispatch, getState, AxiosInstance) => {
        return AxiosInstance.get('/api/users/list')
            .then(res => {
                dispatch(
                    changeList(res.data.data)
                )
            })
    }
}