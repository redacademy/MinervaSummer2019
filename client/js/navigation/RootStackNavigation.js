import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignInScreen from '../screens/SignIn';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import SignUpScreen from '../screens/SignUp';
import AppStack from './AppStackNavigation';
import WelcomeScreen from '../screens/Welcome';
import AccountFormScreen from '../screens/AccountForm';
import LocationFormScreen from '../screens/LocationForm';
import LookingForFormScreen from '../screens/LookingForForm';
import ProfileFormScreen from '../screens/ProfileForm';
import PersonalInterestsFormScreen from '../screens/PersonalInterestsForm';
import ProfessionalInterestsFormScreen from '../screens/ProfessionalInterestsForm';

const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
});

const SignUpStack = createStackNavigator({
  Account: AccountFormScreen,
  Location: LocationFormScreen,
  LookingFor: LookingForFormScreen,
  ProfileForm: ProfileFormScreen,
  PersonalInterests: PersonalInterestsFormScreen,
  ProfessionalInterests: ProfessionalInterestsFormScreen,
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
