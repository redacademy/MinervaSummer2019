import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Mutation} from '@apollo/react-components';
import {GET_ALL_POSTS} from '../../config/apollo/queries';
import {LIKE_COMMENT_MUTATION} from '../../config/apollo/queries';
import {DISLIKE_COMMENT_MUTATION} from '../../config/apollo/queries';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeCount: this.props.comment.likes.length,
    };
  }
  componentDidMount() {
    const {comment, viewer} = this.props;
    const likedIds = comment.likes.map(like => like.id);
    const liked = likedIds.includes(viewer.id);
    this.setState({liked: liked});
  }
  toggleLike = async likeMutation => {
    const {comment, viewer} = this.props;

    try {
      await likeMutation({
        variables: {commentLikesCommentId: comment.id, likesUserId: viewer.id},
      });
      this.setState({
        liked: !this.state.liked,
        likeCount: this.state.liked
          ? this.state.likeCount - 1
          : this.state.likeCount + 1,
      });
    } catch (e) {
      throw e;
    }
  };
  render() {
    const {comment} = this.props;
    return (
      <View style={styles.commentWrapper}>
        {comment.author.photo.url === null ? (
          <Image
            style={styles.image}
            source={require('../../assets/PNG/additional_illustrations/profile.png')}
          />
        ) : (
          <Image
            style={styles.image}
            source={{uri: comment.author.photo.url}}
          />
        )}

        <View style={styles.comment}>
          <Text style={styles.author}>
            {comment.author.firstName}
            <View style={styles.lineB} />
            {comment.author.lastName}:
          </Text>
          <Text style={styles.content}>{comment.content}</Text>

          <View style={styles.resWrapper}>
            <View style={styles.likes}>
              <Image
                source={require('../../assets/PNG/additional_illustrations/like_icon_1.png')}
                style={{width: 15, height: 15}}
                resizeMode="contain"
              />
              <View style={styles.lineB} />
              <Text>{this.state.likeCount} likes</Text>
            </View>
            <Mutation
              mutation={
                this.state.liked
                  ? DISLIKE_COMMENT_MUTATION
                  : LIKE_COMMENT_MUTATION
              }
              refetchQueries={() => [{query: GET_ALL_POSTS}]}>
              {likeMutation => (
                <TouchableOpacity
                  onPress={() => this.toggleLike(likeMutation)}
                  opacity={0.8}>
                  <Text>{this.state.liked ? 'Un-like' : 'Like'}</Text>
                </TouchableOpacity>
              )}
            </Mutation>
          </View>
        </View>
      </View>
    );
  }
}

export default CommentList;
