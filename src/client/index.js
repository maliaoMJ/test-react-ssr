import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../store/index';
import { renderRoutes } from 'react-router-config'
import routes from '../Routes';

const store = getClientStore();
const App = () => {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        {renderRoutes(routes)}
                    </div>
                </BrowserRouter>
            </Provider>
        </div>
    )
}
ReactDom.hydrate(<App></App>, document.getElementById('root'))