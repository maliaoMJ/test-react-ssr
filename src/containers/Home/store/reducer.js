import { CHANGE_LIST } from './constants'

const defaultState = {
    userList: [],
    name: 'redux'
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LIST:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state
    }
}