import React from 'react';
import PostList from '../../components/PostList';
import {ScrollView} from 'react-native';

const Community = ({posts}) => {
  return (
    <ScrollView>
      {posts.map(post => (
        <PostList key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default Community;
