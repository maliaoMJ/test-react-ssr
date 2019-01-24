import React, { Component } from 'react'
import { connect } from 'react-redux';
import AppHeader from '../../components/Header/index';
import { getHomeList } from './store/actions';

class Home extends Component {
    render() {
        return (<div>
            <AppHeader></AppHeader>
            {this.props.wechatAccounts.map(item => { return <div key={item.id}>{item.name}</div> })}
            <button onClick={() => console.log(this.props)}>click</button>
        </div>)
    }
    componentDidMount() {
        // this.props.getHomeList();
        console.log(this.props);
    };
}
Home.loadData = (store) => {
    return store.dispatch(getHomeList());
}
const mapStateToProps = state => ({
    name: state.home.name || '',
    wechatAccounts: state.home.wechatAccounts
});
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
module.exports = connect(mapStateToProps, mapDispatchToProps)(Home)