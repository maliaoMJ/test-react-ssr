import React from 'react';


import Home from './containers/Home/index';
import Login from './containers/Login/index';
export default [
    {
        path: "/",
        key: 'home',
        component: Home,
        loadData: Home.loadData,
        routes: [{
            path: "/all",
            key: 'all',
            exact: true,
            component: Login,
        }]
    },
    {
        path: "/login",
        key: 'login',
        component: Login,
        exact: true,
    }
]
