import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Home from '.pages/Home';
import Tasks from '.pages/Tasks';
export const src = () => {
    return (
        <Switch>
            <Route path="/" exat component={Home} />
            <Route path="/tasks" component={Tasks} />
        </Switch>
    );
};