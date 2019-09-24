import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {
  createFragmentContainer
} from 'react-relay';
const Post = ({ post }) => (
  <div>
    <span>{post.title}</span>
    <span>{post.description}</span>
  </div>
);
const PostFragmentContainer = createFragmentContainer(
  Post, {
  post: graphql`
    fragment ComposeFragment_post on Post {
      id
      title
      description
    },
  `,
});
const Feed = ({ query }) => {
  return (
    <>
      {query.feed.edges.map(
        ({node}) => (
          <Post
            key={node.id}
            post={node}
          />
        ))}
    </>
  );
};
const FeedFragmentContainer = createFragmentContainer(
  Feed, {
  query: graphql`
    fragment ComposeFragment_query on Query {
      feed(first: 10) {
        edges {
          node {
            id
            ...ComposeFragment_post
          }
        }
      }
    },
  `,
});

