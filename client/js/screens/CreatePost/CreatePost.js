import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import GradientButton from '../../components/GradientButton';
import {Mutation} from '@apollo/react-components';
import {gql} from 'apollo-boost';
import styles from './styles';
import {GET_ALL_POSTS} from '../Community/CommunityContainer';

const CREATE_POST = gql`
  mutation createPost($authorId: ID, $content: String!, $type: String!) {
    createPost(authorId: $authorId, content: $content, type: $type) {
      author {
        id
        firstName
        lastName
        photo {
          url
        }
      }
      type
      id
      createdAt
      content
      likes {
        id
      }
      comments {
        id
        author {
          firstName
          lastName
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

const CreatePost = ({getState, insertState, navigation, viewer}) => {
  const [text, onChangeText] = React.useState();
  return (
    <View style={{flex: 1}}>
      <Mutation
        mutation={CREATE_POST}
        update={(cache, {data: {createPost}}) => {
          const {allPosts} = cache.readQuery({query: GET_ALL_POSTS});
          cache.writeQuery({
            query: GET_ALL_POSTS,
            data: {allPosts: [createPost].concat(allPosts)},
          });
        }}>
        {(createPost, {loading}) => (
          <View>
            <View style={styles.inputWrapper}>
              <TextInput
                onChangeText={text => onChangeText(text)}
                value={text}
                placeholder={'Share Your Thoughts...'}
                keyboardType={'default'}
                multiline={true}
                style={styles.input}
              />
            </View>

            <View style={styles.chips}>
              <Text style={styles.header}>Please choose topic</Text>

              <View style={styles.opWrapper}>
                <TouchableOpacity
                  style={[
                    styles.topic,
                    getState() === 'General'
                      ? styles.topicActive
                      : styles.topicInactive,
                  ]}
                  onPress={() => insertState('General')}>
                  <Text
                    style={[
                      styles.topicText,
                      getState() === 'General'
                        ? styles.topicTextActive
                        : styles.topicTextInactive,
                    ]}>
                    General
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.topic,
                    getState() === 'Events'
                      ? styles.topicActive
                      : styles.topicInactive,
                  ]}
                  onPress={() => insertState('Events')}>
                  <Text
                    style={[
                      styles.topicText,
                      getState() === 'Events'
                        ? styles.topicTextActive
                        : styles.topicTextInactive,
                    ]}>
                    Events
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.topic,
                    getState() === 'News'
                      ? styles.topicActive
                      : styles.topicInactive,
                  ]}
                  onPress={() => insertState('News')}>
                  <Text
                    style={[
                      styles.topicText,
                      getState() === 'News'
                        ? styles.topicTextActive
                        : styles.topicTextInactive,
                    ]}>
                    News
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.iconWrapper}>
              <Feather name="camera" size={40} style={styles.icons} />
              <Text>Camera</Text>
            </View>
            <View style={styles.iconWrapper}>
              <Ionics name="ios-images" size={40} style={styles.icons} />
              <Text>Photo/Video</Text>
            </View>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name="gif"
                size={40}
                style={styles.icons}
              />
              <Text>GIF</Text>
            </View>

            <View style={styles.postBtn}>
              <GradientButton
                width="80%"
                text="Post"
                onPress={() => {
                  text &&
                    getState() &&
                    createPost({
                      variables: {
                        authorId: viewer.id,
                        content: text,
                        type: getState(),
                      },
                    }) &&
                    navigation.navigate('Community');
                }}
              />
            </View>
          </View>
        )}
      </Mutation>
    </View>
  );
};

export default CreatePost;
