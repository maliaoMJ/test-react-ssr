import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as HomeReducer } from '../containers/Home/store/index';
const reducer = combineReducers({
    home: HomeReducer
})
const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}
const getClientStore = () => {
    const defaultState = window.context.state;
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}
export {
    getStore,
    getClientStore
};