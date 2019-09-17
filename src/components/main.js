import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home'
import Projects from './projects'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/photos" component={Projects} />
    </Switch>
)

export default Main;