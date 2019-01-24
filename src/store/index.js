import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as HomeReducer } from '../containers/Home/store/index';
import clientAxios from '../client/request.js';
import serverAxios from '../server/request';
const reducer = combineReducers({
    home: HomeReducer
})
const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}
const getClientStore = () => {
    // const defaultState = window.context.state;
    // return createStore(reducer, defaultState, applyMiddleware(thunk));
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
export {
    getStore,
    getClientStore
};