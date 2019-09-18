import ReportDetailsScreen from '../screens/ReportDetails';
import PersonalDetailsScreen from '../screens/ReportPersonalDetails';
import {createStackNavigator} from 'react-navigation-stack';
import {sharedNavigationOptions} from './config';

const ReportStack = createStackNavigator(
  {
    PersonalReport: PersonalDetailsScreen,
    Report: ReportDetailsScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

export default ReportStack;
