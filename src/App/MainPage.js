import React, { Component } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Link } from 'found';

import { Environment } from '../relay/index';
import { createBrowserRouter } from 'found';

const MainPage = (props) => {
  
  return (
    <div>
      <p>Clique na aula que gostaria de testar</p>
    </div>
  );
};

export default MainPage;
