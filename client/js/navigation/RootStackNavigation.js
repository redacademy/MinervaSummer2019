import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from '../screens/SignIn';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AppStack from './AppStackNavigation';
import WelcomeScreen from '../screens/Welcome';
const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
});

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
