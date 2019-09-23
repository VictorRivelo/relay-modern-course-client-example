import makeRouteConfig from 'found/lib/makeRouteConfig';
import { Route, Redirect } from 'found'
import React from 'react';
import App from './App/App';
import MainPage from './App/MainPage';
import Building from './App/Building';


import AppQR from './App/modules/AppQR';
import Fragments from './App/modules/Fragments';
import ComposeFragments from './App/modules/ComposeFragments';
import QueryRendererVariables from './App/modules/QueryRendererVariables';
import CreateQueryRenderer from './App/modules/QueryCreate/CreateQueryRenderer';
import CreateUser from './App/CreateUser';

export default makeRouteConfig(
    <Route path="/" Component={App}>
        <Route Component={MainPage} />
        <Route path="/create-user" Component={CreateUser} />
        <Route path="/03-query-renderer" Component={AppQR} />
        <Route path="/03a-query-renderer-variables" Component={QueryRendererVariables} />        
        <Route path="/03b-create-query-renderer" Component={CreateQueryRenderer} />
        <Route path="/04-fragments" Component={Fragments} />
        <Route path="/05-compose-fragments" Component={Building} />
        <Route path="/06-refetch-container" Component={Building} />
        <Route path="/06a-refetch-hooks" Component={Building} />
        <Route path="/07-mutations" Component={Building} />
        <Route path="/08-network-layer" Component={Building} />
        <Route path="/08b-network-autentication" Component={Building} />
        <Route path="/08c-network-uploadables" Component={Building} />
        <Route path="/08d-network-cache" Component={Building} />
        <Route path="/08e-network-debug" Component={Building} />
        <Route path="/08f-network-observable" Component={Building} />
        <Route path="/09-argument-definition" Component={Building} />
        <Route path="/10-include-skip" Component={Building} />
        <Route path="/11-simulating-defer" Component={Building} />


    </Route>
  );