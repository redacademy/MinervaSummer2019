import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import {SignUpProvider} from './context/SignUpContext';
import {FavesProvider} from './context/FavesContext';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SignUpProvider>
        <FavesProvider>
          <RootStackNavigation />
        </FavesProvider>
      </SignUpProvider>
    </ApolloProvider>
  );
};

export default App;
