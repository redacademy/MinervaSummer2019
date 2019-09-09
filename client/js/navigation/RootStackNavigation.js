import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AppStack from './AppStackNavigation';
import SignUpStack from './SignUpStackNavigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from '../screens/Welcome';
import SignInScreen from '../screens/SignIn';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpStack,
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
