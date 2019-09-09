import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import CommentList from '../js/components/CommentList';
const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <RootStackNavigation /> */}
      <CommentList />
    </ApolloProvider>
  );
};

export default App;
