import React, { Component } from 'react';

const errorView = (props) => {
    
    return (
        <div>
          <p>{console.error(props)}</p>
        </div>
      );
}

export default errorView;