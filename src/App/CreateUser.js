import React, { Component, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import { Link } from 'found';

import { Environment } from '../relay/index';
import { createBrowserRouter } from 'found';

const CreateUser = (props) => {

  const [user, setUser] = useState(null);

const renderLogin = () => (


    <>
    <p>Caso tenha interesse crie um usuário</p>
    <form><label>name: <input type='text'  /></label></form>
    <form><label>e-mail:<input type='text' /></label></form>   
    <form><label>password:<input type='text' /></label></form>
    <form><label>clientMutationId<input type='text' /></label></form>
    <form><label>
          <button 
            style = {{margin: '10px', border : '5px'}} 
            onClick={
              () => setUser()
            }> submit 
          </button></label></form>
    
    </>
  );

  return (
    <>            
        {renderLogin()}      
    </>
  )
}

export default CreateUser;

