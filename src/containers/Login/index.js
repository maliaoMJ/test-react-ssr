import React from 'react'
import AppHeader from '../../components/Header/index'
const Home = () => {
    return <div>
        <span>Login page</span>
        <button onClick={() => alert('hello React Login SSR')}>click</button>
    </div>
}

module.exports = Home