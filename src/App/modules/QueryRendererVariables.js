import React, {useState} from 'react';
import { QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { RouteComponentProps } from '../../relay/index';
import { Environment } from '../../relay/index';


const Post = ({ post }) => (
  <div>
    <span>{post.title}</span>
    <span>{post.description}</span>
  </div>
);

const QueryRendererVariables = ({ match }) => {
  
  const [idText, setIdText] = useState(null);

  const handleChange = (event) => {
    this.setIdText(event.target.value)
  }

  const renderInput = () => (
    <>
      {/* <input type='text' onChange={this.handleChange} value={idText}/>        */}
      <input type='text'/> 
      <button 
          style = {{margin: '10px', border : '5px'}} 
          onSubmit={(e) => setIdText(e.target.value)}> submit 
      </button>
    </>
  );

  const renderQuery = () =>(
    
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query QueryRendererVariables_Query($id: ID!) {
          post(id: $id) {
            id
            title
            description
          }
        }
      `}
      variables={{
        //match param id
        id: "post-e17c2879-d643-4105-bece-e0ff5dbfa619",
      }}
      render={({error, props}) => {
        if (error) {
          return <div>Error</div>
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return  props.post ? <Post post={props.post}/> : "Post - NotFound";
      }}
    />
  )
  
  return (
  
    <>
    {<p>Post Description: </p>}
    {renderQuery()}       
    </>
  )
}
export default QueryRendererVariables;