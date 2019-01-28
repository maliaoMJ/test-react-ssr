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
            }
            break;
        case EXIT_LOGIN:
            return {
                ...state,
            }
            break;
        default:
            return state
            break;
    }
}