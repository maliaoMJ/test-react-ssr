import React from 'react';
import ReactDom from 'react-dom';
import Home from '../components/Home/index'

ReactDom.hydrate(<Home></Home>, document.getElementById('root'))