import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootStackNavigation />
    </ApolloProvider>
  );
};

export default App;
