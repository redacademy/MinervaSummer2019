import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import CommentsContainer from '../js/screens/Comments';

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <RootStackNavigation /> */}
      <CommentsContainer />
    </ApolloProvider>
  );
};

export default App;
