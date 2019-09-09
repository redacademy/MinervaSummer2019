import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import {SignUpProvider} from './context/SignUpContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SignUpProvider>
        <RootStackNavigation />
      </SignUpProvider>
    </ApolloProvider>
  );
};

export default App;
