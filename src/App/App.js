import React, { Component } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Link } from 'found';

import { Environment } from '../relay/index';
import { createBrowserRouter } from 'found';

const App = (props) => {  
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to the jungle!
        </p>
        
      </header>
      <div>
      <ul>
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/create-user' >CreateUser</Link></li>
        <li><Link to='/03-query-renderer' >Aula 3 - QueryRenderer</Link></li>
        <li><Link to='/03a-query-renderer-variables' >Aula 3a - QueryRendererVariables</Link></li>
        <li><Link to='/03b-create-query-renderer'>Aula 3b - CreateQueryRenderer</Link></li>
        <li><Link to='/04-fragments'>Aula 4 - Fragments</Link></li>
        <li><Link to='/05-compose-fragments'>Aula 5 - ComposeFragments</Link></li>
        <li><Link to='/06-refetch-container'>Aula 6 - RefetchContainer</Link></li>
        <li><Link to='/06a-refetch-hooks'>Aula 6a - RefetchHooks</Link></li>
        <li><Link to='/07-mutations'>Aula 7 - Mutations</Link></li>
        <li><Link to='/08-network-layer'>Aula 8 - NetworkLayer</Link></li>
        <li><Link to='/08b-network-autentication'>Aula 8b - NetworkAutentication</Link></li>
        <li><Link to='/08c-network-uploadables'>Aula 8c - NetworkUploadables</Link></li>
        <li><Link to='/08d-network-cache'>Aula 8d - NetworkCache</Link></li>
        <li><Link to='/08e-network-debug'>Aula 8e - NetworkDebug</Link></li>
        <li><Link to='/08f-network-observable'>Aula 8f - NetworkObservable</Link></li>
        <li><Link to='/09-argument-definition'>Aula 9 - ArgumentDefinition</Link></li>
        <li><Link to='/10-include-skip'>Aula 10 - IncludeSkip</Link></li>
        <li><Link to='/11-simulating-defer'>Aula 11 - SimulatingDefer</Link></li>

      </ul> 
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default App;
