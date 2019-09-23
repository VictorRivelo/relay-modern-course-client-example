import React from 'react';
import {
  QueryRenderer,
  createFragmentContainer
} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RouteComponentProps } from '../../relay/index';
import { Environment } from '../../relay/index';

const Post = ({ post }) => (
  <div>
    <span>{post.title}</span>
    <span>{post.description}</span>
  </div>
);
const PostFragmentContainer = createFragmentContainer(
  Post, {
  post: graphql`
    fragment Fragments_post on Post {
      id
      title
      description
    },
  `,
});

const App = ({ match }) => (
  <QueryRenderer
    environment={Environment}
    query={graphql`
      query Fragments_Query($id: ID!) {
        post(id: $id) {
          ...Fragments_post         
        }
      }
    `}
    variables={{
      id: "post-e17c2879-d643-4105-bece-e0ff5dbfa619",
    }}
    render={({error, props}) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      return (
        <PostFragmentContainer
          post={props.post} />
        );
    }}
  />
);
export default App;