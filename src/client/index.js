import React from 'react';
import ReactDom from 'react-dom';
import Home from '../components/Home/index';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Routes';
const App = () => {
    return (
        <div>
            <BrowserRouter>{Routes}</BrowserRouter>
        </div>
    )
}
ReactDom.hydrate(<App></App>, document.getElementById('root'))