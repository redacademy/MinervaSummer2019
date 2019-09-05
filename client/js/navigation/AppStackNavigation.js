import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CommunityScreen from '../screens/Community';
import ConnectionsScreen from '../screens/Connections';
import ChatsScreen from '../screens/AllChats';
import ProfileScreen from '../screens/UserProfile';

const CommunityStack = createStackNavigator({Community: CommunityScreen});
const ConnectionsStack = createStackNavigator({Connections: ConnectionsScreen});
const ChatsStack = createStackNavigator({Chats: ChatsScreen});
const ProfileStack = createStackNavigator({Profile: ProfileScreen});

export default createBottomTabNavigator({
  Community: CommunityStack,
  Connections: ConnectionsStack,
  Chats: ChatsStack,
  Profile: ProfileStack,
});
