import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import {Mutation} from '@apollo/react-components';

import styles from './styles';
import {GET_ALL_POSTS} from '../../config/apollo/queries';
import {CREATE_COMMENT} from '../../config/apollo/queries';

const CreateComment = ({postId, toggleCommentDisplay, viewer}) => {
  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      {viewer.photo === null ? (
        <Image
          style={styles.image}
          source={require('../../assets/PNG/additional_illustrations/profile.png')}
        />
      ) : (
        <Image style={styles.image} source={{uri: viewer.photo.url}} />
      )}

      <Mutation
        mutation={CREATE_COMMENT}
        refetchQueries={() => [{query: GET_ALL_POSTS}]}>
        {(createComment, {loading}) => (
          <View style={styles.inputWrapper}>
            <TextInput
              onChangeText={text => onChangeText(text)}
              value={text}
              style={styles.input}
              placeholder={'Share Your Thoughts...'}
              keyboardType={'default'}
              enablesReturnKeyAutomatically={true}
              keyboardAppearance="light"
            />
            <TouchableOpacity
              onPress={() => {
                createComment({
                  variables: {
                    authorId: viewer.id,
                    postId: postId,
                    content: text,
                  },
                });
                toggleCommentDisplay();
              }}>
              <Text style={styles.commentBtn}>Comment</Text>
            </TouchableOpacity>
          </View>
        )}
      </Mutation>
    </View>
  );
};

export default CreateComment;
