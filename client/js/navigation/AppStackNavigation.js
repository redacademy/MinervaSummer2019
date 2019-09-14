import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CommunityScreen from '../screens/Community';
import FavouritesScreen from '../screens/Favourites';
import ConnectionsScreen from '../screens/Connections';
import ChatsScreen from '../screens/AllChats';
import CommentsScreen from '../screens/Comments';
import ProfileScreen from '../screens/UserProfile';
import CreatePostScreen from '../screens/CreatePost';
import SingleChatScreen from '../screens/SingleChat';

const CommunityStack = createStackNavigator({
  Community: {
    screen: CommunityScreen,
  },

  Comments: {
    screen: CommentsScreen,
  },

  CreatePost: {
    screen: CreatePostScreen,
  },

  Favourites: {
    screen: FavouritesScreen,
  },
});
const ConnectionsStack = createStackNavigator({
  Connections: {screen: ConnectionsScreen},
  Profile: {screen: ProfileScreen},
});
const ChatsStack = createStackNavigator({
  Chats: {screen: ChatsScreen},
  SingleChat: {
    screen: SingleChatScreen,
  },
});
const ProfileStack = createStackNavigator({Profile: ProfileScreen});

export default createBottomTabNavigator({
  Community: CommunityStack,
  Connections: ConnectionsStack,
  Chats: ChatsStack,
  Profile: ProfileStack,
});
