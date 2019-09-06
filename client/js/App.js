import RootStackNavigation from './navigation/RootStackNavigation';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import CommunityContainer from '../js/screens/Community';

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <RootStackNavigation /> */}
      <CommunityContainer />
    </ApolloProvider>
  );
};

export default App;
