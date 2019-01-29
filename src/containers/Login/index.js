import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import AppHeader from '../../components/Header/index';
const Home = () => {
    return <Fragment>
        <Helmet>
            <title>这是登录页</title>
            <meta name="description" content="reactSSR原理-登录页"></meta>
        </Helmet>
        <span>Login page</span>
        <button onClick={() => alert('hello React Login SSR')}>click</button>
    </Fragment>
}

module.exports = Home