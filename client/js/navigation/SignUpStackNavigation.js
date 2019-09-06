import AccountFormScreen from '../screens/AccountForm';
import LocationFormScreen from '../screens/LocationForm';
import LookingForFormScreen from '../screens/LookingForForm';
import ProfileFormScreen from '../screens/ProfileForm';
import PersonalInterestsFormScreen from '../screens/PersonalInterestsForm';
import ProfessionalInterestsFormScreen from '../screens/ProfessionalInterestsForm';
import {createStackNavigator} from 'react-navigation-stack';

const SignUpStack = createStackNavigator({
  Account: AccountFormScreen,
  Location: LocationFormScreen,
  LookingFor: LookingForFormScreen,
  ProfileForm: ProfileFormScreen,
  PersonalInterests: PersonalInterestsFormScreen,
  ProfessionalInterests: ProfessionalInterestsFormScreen,
});

export default SignUpStack;