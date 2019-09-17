import RootStackNavigation from './navigation/RootStackNavigation';
import React, {useEffect} from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './config/apollo';
import {SignUpProvider} from './context/SignUpContext';
import {FavesProvider} from './context/FavesContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => SplashScreen.hide());

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
