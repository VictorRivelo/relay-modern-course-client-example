import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';

import { Environment } from '../../relay/index';

const AppQR = props => {
  console.log(' dsadsadd')
  
  
  return (
    <QueryRenderer
          environment={Environment}
          query={graphql`
            query AppQR_Query {
              randomUser {
                name
                id
                email                
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            console.log('qr: ', error, props);
              if (error) {
                return <span>{error.toString()}</span>;
              }
  
              if (props) {
                return (
                <>
                  <p>LoggedUser ID: {props.randomUser && props.randomUser.id ? props.randomUser.id : null}</p>
                  <p>LoggedUser Name: {props.randomUser && props.randomUser.name ? props.randomUser.name : null}</p>
                  <p>LoggedUser Email: {props.randomUser && props.randomUser.email ? props.randomUser.email : null}</p>      
                </>
                  );
              }
  
              return <span>loading</span>;
            }}
          />
    )
  };
  
  export default AppQR;