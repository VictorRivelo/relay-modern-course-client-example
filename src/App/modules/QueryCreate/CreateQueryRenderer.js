// import React, {useState} from 'react';
// import wrapperCreateQueryRenderer from './WrapperCreateQueryRenderer';
// import graphql from 'babel-plugin-relay/macro';
// import {  
//   QueryRenderer,
//   createFragmentContainer
// } from 'react-relay';

// const Post = ({ post }) => (
//   <div>
//     <span>{post.title}</span>
//     <span>{post.description}</span>
//   </div>
// );

// const PostFragmentContainer = createFragmentContainer(
//   Post, {
//     post: graphql`
//       fragment CreateQueryRenderer_post on Post {
//         id
//         title
//         description
//       },
//   `}
// );

// const createQueryRenderer = (props) => {    
//   return (
//     <>
//       <p>Sua query é:</p>      
//     </>
//   )
// }

// const withQ = wrapperCreateQueryRenderer(PostFragmentContainer,  
//   {query : graphql`query CreateQueryRenderer_Query ($id: ID!) {
//                         post(id: $id) {
//                         ...CreateQueryRenderer_post
//                       }
//                     }
//                   `,                          
//   queriesParams : {id :"user-173830d3-5a7b-46f1-84cb-e0c5a5613010"}});
// export default withQ;