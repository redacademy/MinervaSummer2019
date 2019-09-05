import React from 'react';
import {View} from 'react-native';
import SingleComment from '../../components/SingleComment';

const Comments = ({comment}) => {
  return <SingleComment comment={comment} />;
};

export default Comments;
