import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';

export const GET_ALL_POSTS = gql`
  query {
    allPosts(orderBy: createdAt_ASC) {
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

const LIKE_COMMENT_MUTATION = gql`
  mutation addToCommentLikes($commentLikesCommentId: ID!, $likesUserId: ID!) {
    addToCommentLikes(
      commentLikesCommentId: $commentLikesCommentId
      likesUserId: $likesUserId
    ) {
      commentLikesComment {
        _likesMeta {
          count
        }
      }
    }
  }
`;

const DISLIKE_COMMENT_MUTATION = gql`
  mutation removeFromCommentLikes(
    $commentLikesCommentId: ID!
    $likesUserId: ID!
  ) {
    removeFromCommentLikes(
      commentLikesCommentId: $commentLikesCommentId
      likesUserId: $likesUserId
    ) {
      commentLikesComment {
        _likesMeta {
          count
        }
      }
    }
  }
`;

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {comment, viewer} = this.props;
    const likedIds = comment.likes.map(like => like.id);
    const liked = likedIds.includes(viewer.id);
    this.setState({liked: liked, likeCount: comment.likes.length});
  }
  toggleLike = async likeMutation => {
    const {comment, viewer} = this.props;
    try {
      await likeMutation({
        variables: {commentLikesCommentId: comment.id, likesUserId: viewer.id},
      });
      this.setState({
        liked: !this.state.liked,
        likeCount: this.props.comment.likes.length,
      });
    } catch (e) {
      throw e;
    }
  };
  render() {
    const {comment} = this.props;
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
            <View style={styles.lineB} />
            {comment.author.lastName}:
          </Text>
          <Text style={styles.content}>{comment.content}</Text>

          <View style={styles.resWrapper}>
            <View style={styles.likes}>
              <Ionics name={'ios-thumbs-up'} />
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
