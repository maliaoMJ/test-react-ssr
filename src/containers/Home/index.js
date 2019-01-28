import React, { Component } from 'react'
import { connect } from 'react-redux';
import AppHeader from '../../components/Header/index';
import { getHomeList } from './store/actions';
import styleCommpent from '../../withStyle'
import styles from './index.css';
class Home extends Component {
    render() {
        return (<div>
            <span className={styles.font}>Home page</span>
            {this.props.userList.map(item => { return <div key={item.id}>{item.name}</div> })}
            <button onClick={() => console.log(this.props)}>click</button>
        </div>)
    }
    componentDidMount() {
        this.props.getHomeList();
    };
}
Home.loadData = (store) => {
    return store.dispatch(getHomeList());
}
const mapStateToProps = state => ({
    name: state.home.name || '',
    userList: state.home.userList || []
});
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(styleCommpent(Home,styles))
