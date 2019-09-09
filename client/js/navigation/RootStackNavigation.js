import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AppStack from './AppStackNavigation';
import AuthStack from './AuthStackNavigation';
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
