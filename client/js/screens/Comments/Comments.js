import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CommentList from '../../components/CommentList';
import styles from './styles';
import FavesContext from '../../context/FavesContext';

const Comments = ({comments}) => {
  return comments.length !== 0 ? (
    <FavesContext.Consumer>
      {context => {
        return (
          <ScrollView style={{flex: 1}}>
            {comments.map(comment => (
              <CommentList
                comment={comment}
                key={comment.id}
                viewer={context.viewer}
              />
            ))}
          </ScrollView>
        );
      }}
    </FavesContext.Consumer>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No Comments are made</Text>
    </View>
  );
};

export default Comments;
