import React from "react";
import App from "./App";

import Home from "./containers/Home/index";
import Login from "./containers/Login/index";
import NoFound from "./containers/NoFound/index";
export default [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/",
        key: "home",
        component: Home,
        loadData: Home.loadData,
        exact: true
        // routes: [{
        //     path: "/all",
        //     key: 'all',
        //     exact: true,
        //     component: Login,
        // }]
      },
      {
        path: "/login",
        key: "login",
        component: Login,
        exact: true
      },
      {
        component: NoFound,
        key: "noFound"
      }
    ]
  }
];
