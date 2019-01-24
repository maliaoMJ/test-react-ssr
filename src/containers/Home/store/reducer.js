import { CHANGE_LIST } from './constants'

const defaultState = {
    wechatAccounts: [],
    name: 'redux'
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LIST:
            return {
                ...state,
                wechatAccounts: action.payload
            }
        default:
            return state
    }
}