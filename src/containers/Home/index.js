import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getHomeList } from "./store/actions";
import styleComponent from "../../withStyle";
import styles from "./index.css";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>这是首页</title>
          <meta name="description" content="reactSSR原理" />
        </Helmet>
        <span className={styles.font}>Home page</span>
        {this.props.userList.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
        <button onClick={() => console.log(this.props)}>click</button>
      </Fragment>
    );
  }
  componentDidMount() {
    this.props.getHomeList();
  }
}
Home.loadData = store => {
  return store.dispatch(getHomeList());
};
const mapStateToProps = state => ({
  name: state.home.name || "",
  userList: state.home.userList || []
});
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styleComponent(Home, styles));
