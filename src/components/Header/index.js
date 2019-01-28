import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userToLogin, userExitLogin } from './store/actions'
class AppHeader extends Component {
    render() {
        return (<div>
            <span>Header Components</span>
            <Link to="/">home</Link>
            <Link to="/login">Login</Link>
            <p>退出登录</p>
            <br></br>
        </div>)
    }
    componentDidMount() {
        console.log(this.props);
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    login: state.auth.login
});
const mapDispatchToProps = dispatch => ({
    toLogin: () => {
        dispatch(userToLogin())
    },
    exit: () => {
        dispatch(userExitLogin())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);