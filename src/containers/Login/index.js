import React from 'react'
import AppHeader from '../../components/Header/index'
const Home = () => {
    return <div>
        <AppHeader></AppHeader>
        <span>React SSR  Login Components</span>
        <button onClick={() => alert('hello React Login SSR')}>click</button>
    </div>
}

module.exports = Home