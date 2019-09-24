import * as React from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { QueryRenderer } from 'react-relay';
import  { GraphQLTaggedNode, Variables } from 'react-relay';
import Environment from '../../../relay/Environment';
import ErrorView from '../../../relay/ErrorView';
import LoadingView from '../../../relay/LoadingView';

export default function wrapperCreateQueryRenderer(
  FragmentComponent,
  Component,
  config,
) {
  const { query, queriesParams } = config;
  class QueryRendererWrapper extends React.Component {
    render() {
      const variables = queriesParams
        ? queriesParams(this.props) :
        config.variables;        
      return (        
        <QueryRenderer
          environment={Environment}
          query={query}
          variables={variables}
          render={({ error, props, retry }) => {
            if (error) {
              return (
                <ErrorView
                  error={error}
                  retry={retry}/>
              );
            }
            if (props) {
              const fragmentProps = config.getFragmentProps
                ? config.getFragmentProps(props)
                : { query };
              return (
                <FragmentComponent
                  {...this.props}
                  {...fragmentProps}
                />                
              );
            }
            if (config.loadingView !== undefined) {
              return config.loadingView;              
            }
            return <LoadingView />            
          }}
        />
      );
    }
  }
  return hoistStatics(QueryRendererWrapper, Component);
}
