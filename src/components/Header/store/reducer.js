import { USER_LOGIN, EXIT_LOGIN } from './constants';

const defaultState = {
    login: false,
    user: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload,
                login: true
            }
            break;
        case EXIT_LOGIN:
            return {
                ...state,
                login: false,
                user: {}
            }
            break;
        default:
            return state
            break;
    }
}