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
              me {
                name
                id
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
                  <span>LoggedUser ID: {props.me && props.me.id ? props.me.id : null}</span>
                  <span>LoggedUser Name: {props.me && props.me.name ? props.me.name : null}</span>
                </>
                  );
              }
  
              return <span>loading</span>;
            }}
          />
    )
  };
  
  export default AppQR;