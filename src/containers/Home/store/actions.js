import axios from 'axios';
import { CHANGE_LIST } from './constants'
const changeList = (payload) => ({
    type: CHANGE_LIST,
    payload
});
export const getHomeList = () => {
    return (dispatch) => {
        return axios.get('/api/app/mock/23080/wxauth/accounts')
            .then(res => {
                dispatch(
                    changeList(res.data.wechatAccounts)
                )
            })
    }
}