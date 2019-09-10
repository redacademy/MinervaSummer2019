import React from 'react';
import PostList from '../../components/PostList';
import {ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Community = ({posts, context}) => {
  console.log(context);
  const {faves, addFave, removeFave, deleteAllFaves, viewer} = context;
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          deleteAllFaves(viewer);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
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
