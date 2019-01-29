import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userToLogin, userExitLogin } from './store/actions';
import styleHighComponents from '../../withStyle'
import styles from './index.css'
class AppHeader extends Component {
    render() {
        return (<Fragment>
            <span className={styles.font}>Header Components</span>
            <Link to="/">home</Link>
            <Link to="/login">Login</Link>
            <p onClick={this.props.toLogin}>登录</p>
            <p onClick={this.props.exit}>退出登录</p>
            <br></br>
            <span>{this.props.login ? this.props.user.pwd : '暂未登录'}</span>
        </Fragment>)
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
        dispatch(userToLogin({
            name: 'majian'
        }));
    },
    exit: () => {
        dispatch(userExitLogin(
            { pwd: 'abc' }
        ))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(styleHighComponents(AppHeader, styles));
