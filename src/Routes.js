import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/index';

export default (
    <div>
        <Route path="/" exact component={Home}></Route>
    </div>
)