import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CommentList = ({comment}) => {
  return (
    <View style={styles.commentWrapper}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/PNG/additional_illustrations/profile.png')}
        />
      </View>

      <View style={styles.comment}>
        <Text style={styles.author}>
          {comment.author.firstName}
          <View style={style.lineB} />
          {comment.author.lastName}:
        </Text>
        <Text style={styles.content}>{comment.content}</Text>

        <View style={styles.resWrapper}>
          <View style={styles.likes}>
            <Ionics name={'ios-thumbs-up'} />
            <View style={style.lineB} />
            <Text>{comment.likes.length} likes</Text>
          </View>

          <TouchableOpacity opacity={0.8}>
            <Text>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentList;
