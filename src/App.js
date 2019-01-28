import React, { Component } from 'react';
import AppHeader from './components/Header/index';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
class App extends Component {

    render() {

        return (
            <div>
                <AppHeader staticContext={this.props.staticContext ? this.props.staticContext : {}}></AppHeader>
                {renderRoutes(this.props.route.routes)}
            </div>
        )
    }

    componentDidMount() { }
}
const mapStateToProps = state => ({
    store: state
});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(App)
