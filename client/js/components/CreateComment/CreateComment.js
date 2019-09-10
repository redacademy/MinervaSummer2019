import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import styles from './styles';

const CREATE_COMMENT = gql`
  mutation createComment($authorId: ID, $postId: ID, $content: String!) {
    createComment(authorId: $authorId, postId: $postId, content: $content) {
      content
    }
  }
`;

const CreateComment = ({postId, toggleCommentDisplay}) => {
  const [text, onChangeText] = React.useState();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/PNG/additional_illustrations/profile.png')}
      />
      <Mutation mutation={CREATE_COMMENT}>
        {(createComment, {loading}) => (
          <View style={styles.inputWrapper}>
            <TextInput
              onChangeText={text => onChangeText(text)}
              value={text}
              style={styles.input}
              placeholder={'Share Your Thoughts...'}
              keyboardType={'default'}
            />
            <TouchableOpacity
              onPress={() => {
                createComment({
                  variables: {
                    authorId: 'ck07255yn0pyx01415da8y14o',
                    postId: postId,
                    content: text,
                  },
                });
                toggleCommentDisplay();
              }}>
              <Text style={styles.postBtn}>Post</Text>
            </TouchableOpacity>
          </View>
        )}
      </Mutation>
    </View>
  );
};

export default CreateComment;
