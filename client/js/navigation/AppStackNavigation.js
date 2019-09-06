import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CommunityScreen from '../screens/Community';
import ConnectionsScreen from '../screens/Connections';
import ChatsScreen from '../screens/AllChats';
import YourProfileScreen from '../screens/YourProfile';
import CommentsScreen from '../screens/Comments';

const CommunityStack = createStackNavigator({
  Community: {
    screen: CommunityScreen,
  },
  // Comments: {
  //   screen: CommentsScreen,
  // },
});
const ConnectionsStack = createStackNavigator({Connections: ConnectionsScreen});
const ChatsStack = createStackNavigator({Chats: ChatsScreen});
const ProfileStack = createStackNavigator({Profile: YourProfileScreen});

export default createBottomTabNavigator({
  Community: CommunityStack,
  Connections: ConnectionsStack,
  Chats: ChatsStack,
  Profile: ProfileStack,
});
