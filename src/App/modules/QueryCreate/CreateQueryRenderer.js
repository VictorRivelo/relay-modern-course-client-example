import React, {useState} from 'react';
import wrapperCreateQueryRenderer from './WrapperCreateQueryRenderer';
import graphql from 'babel-plugin-relay/macro';
import {
  QueryRenderer,
  createFragmentContainer
} from 'react-relay';

const createQueryRenderer = () => {
    
    const Post = ({ post }) => (
      <div>
        <span>{post.title}</span>
        <span>{post.description}</span>
      </div>
  );

    const PostFragmentContainer = createFragmentContainer(
    Post, {
    post: graphql`
      fragment CreateQueryRenderer_post on Post {
        id
        title
        description
      },
    `});

    return (  
        <>        
        {<p>Sua query é: </p>}
        </>
        /* {wrapperCreateQueryRenderer(PostFragmentContainer, createQueryRenderer,  
                {query : (graphql`query CreateQueryRenderer_Post {
                                    query MainQuery(id: ID) {
                                      post(id: $id) {
                                      ...Post_post         
                                    }                                                                   
                                  }
                                `), 
                queriesParams : ("post-e17c2879-d643-4105-bece-e0ff5dbfa619")})}       
        </> */
      )

}

export default createQueryRenderer;
