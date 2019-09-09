import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from '../screens/SignIn';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import ProfileScreen from '../screens/UserProfile';
import AppStack from './AppStackNavigation';
import WelcomeScreen from '../screens/Welcome';
import SignUpStack from './SignUpStackNavigation';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      SignUp: SignUpStack,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
