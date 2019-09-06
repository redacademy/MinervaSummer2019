import React from 'react';
import {View} from 'react-native';
import CommentList from '../../components/CommentList';

const Comments = ({comments}) => {
  return comments.map(comment => (
    <CommentList comment={comment} key={comment.id} />
  ));
};

export default Comments;
