import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return <div>
        <span>Header Components</span>
        <Link to="/">home</Link>
        <Link to="/login">Login</Link>
        <br></br>
    </div>
}

module.exports = Header