import React from 'react';
// import SinglePost from '../SinglePost';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {formatDateString} from '../../lib/helper';

const PostGrid = ({post}) => {
  const newDate = formatDateString(post.createdAt);
  return (
    <View style={styles.container}>
      <View style={styles.authorWrapper}>
        <Image
          style={styles.head}
          source={{
            uri:
              'data:image/png;base64,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',
          }}
        />
        {console.log(post)}
        <View>
          <Text>
            {post.author.firstName}
            {post.author.lastName}
          </Text>
          <Text>{newDate}</Text>
        </View>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.responseWrapper}>
        <Ionics name={'ios-thumb-up'} />
        <Text>Likes</Text>

        <Ionics name={'ios-thumb-up'} />
        <Text>Comments</Text>
      </View>

      <TouchableOpacity style={styles.touch}>
        <View style={styles.likeBtn}>
          <Ionics name={'ios-thumb-up'} />
          <Text>Like</Text>
        </View>
        <View style={styles.commentBtn}>
          <Ionics name={'ios-thumb-up'} />
          <Text>Comment</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostGrid;
