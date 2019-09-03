import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CommunityScreen from '../screens/Community';
import LoginScreen from '../screens/Login';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AppStack from './AppStackNavigation';
const AuthStack = createStackNavigator({Login: LoginScreen});

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
