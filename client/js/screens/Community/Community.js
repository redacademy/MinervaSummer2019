import React from 'react';
import PostList from '../../components/PostList';

const Community = ({posts}) => {
  return posts.map(post => <PostList key={post.id} post={post} />);
};

export default Community;
