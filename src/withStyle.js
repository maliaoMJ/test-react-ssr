import React, { Component } from 'react';

export default (DecoratedComponent, styles) => {
  return class StyleWrapperComponent extends Component {
     componentWillMount() {
       if(this.props.staticContext && this.props.staticContext.css) {
         this.props.staticContext.css.push(styles._getCss());
       }
     }
     render() {
       return <DecoratedComponent {...this.props}/>
     }
  }
}
