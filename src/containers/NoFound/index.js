import React, { Component } from 'react';

class NoFound extends Component {
    componentWillMount() {
        const { staticContext } = this.props;
        staticContext && (staticContext.NO_FOUND = true)
    }
    render() {
        return (
            <div>Sorry, This page is NoFound!</div>
        )
    }
}

export default NoFound