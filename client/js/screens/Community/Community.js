import React from 'react';
import PostList from '../../components/PostList';
import {ScrollView} from 'react-native';

const Community = ({posts, context}) => {
  const {faves, addFave, removeFave, viewer} = context;
  return (
    <ScrollView>
      {posts.map(post => (
        <PostList
          key={post.id}
          post={post}
          viewer={viewer}
          removeFave={removeFave}
          addFave={addFave}
          faved={faves && faves.includes(post.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Community;
