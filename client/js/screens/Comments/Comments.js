import React from 'react';
import {View, Text} from 'react-native';
import CommentList from '../../components/CommentList';
import styles from './styles';

const Comments = ({comments}) => {
  return comments.length !== 0 ? (
    comments.map(comment => <CommentList comment={comment} key={comment.id} />)
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No Comments are made</Text>
    </View>
  );
};

export default Comments;
