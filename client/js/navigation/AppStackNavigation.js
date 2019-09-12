import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CommunityScreen from '../screens/Community';
import FavouritesScreen from '../screens/Favourites';
import ConnectionsScreen from '../screens/Connections';
import ChatsScreen from '../screens/AllChats';
import CommentsScreen from '../screens/Comments';
import ProfileScreen from '../screens/UserProfile';
import CreatePostScreen from '../screens/CreatePost';

import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

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
const ConnectionsStack = createStackNavigator({Connections: ConnectionsScreen});
const ChatsStack = createStackNavigator({Chats: ChatsScreen});
const ProfileStack = createStackNavigator({Profile: ProfileScreen});

export default createBottomTabNavigator(
  {
    Community: CommunityStack,
    Connections: ConnectionsStack,
    Chats: ChatsStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Community') {
          return (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/PNG/navigation_bar/community_blue.png')
                    : require('../assets/PNG/navigation_bar/community_light_grey.png')
                }
              />
            </View>
          );
        } else if (routeName === 'Connections') {
          return (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/PNG/navigation_bar/connections_blue.png')
                    : require('../assets/PNG/navigation_bar/connections_light_grey.png')
                }
              />
            </View>
          );
        } else if (routeName === 'Chats') {
          return (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/PNG/navigation_bar/chat_blue.png')
                    : require('../assets/PNG/navigation_bar/chat_light_grey.png')
                }
              />
            </View>
          );
        } else if (routeName === 'Profile') {
          return (
            <View>
              <Image
                source={
                  focused
                    ? require('../assets/PNG/navigation_bar/profile_blue.png')
                    : require('../assets/PNG/navigation_bar/profile_light_grey.png')
                }
              />
            </View>
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00A3B4',
      inactiveTintColor: '#CFCFCF',

      labelStyle: {
        fontSize: 12,
        // color: '#00A3B4',
      },
    },
  },
);
