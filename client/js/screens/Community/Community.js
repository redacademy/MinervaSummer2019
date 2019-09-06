import React from 'react';
import {Text, View} from 'react-native';
import PostList from '../../components/PostList';

const Community = ({post}) => {
  return (
    <View>
      <PostList post={post} />
    </View>
  );
};

export default Community;
