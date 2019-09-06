import React from 'react';
import {Text, View} from 'react-native';
import PostGrid from '../../components/PostGrid';

const Community = ({post}) => {
  return (
    <View>
      <PostGrid post={post} />
    </View>
  );
};

export default Community;
