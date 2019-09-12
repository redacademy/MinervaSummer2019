import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {formatDateString} from '../../lib/helper';
import Ionics from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import CreateComment from '../CreateComment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import theme from '../../config/theme';
import {gql} from 'apollo-boost';
import {Mutation} from '@apollo/react-components';

const DELETE_POST_MUTATION = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

const LIKE_POST_MUTATION = gql`
  mutation addToPostLikes($likesPostId: ID!, $likesUserId: ID!) {
    addToPostLikes(likesPostId: $likesPostId, likesUserId: $likesUserId) {
      likesPost {
        id
      }
    }
  }
`;
const DISLIKE_POST_MUTATION = gql`
  mutation removeFromPostLikes($likesPostId: ID!, $likesUserId: ID!) {
    removeFromPostLikes(likesPostId: $likesPostId, likesUserId: $likesUserId) {
      likesPost {
        id
      }
    }
  }
`;

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
          id
          photo {
            url
          }
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCommentInput: false,
    };
  }
  componentDidMount() {
    const likedIds = this.props.post.likes.map(like => like.id);
    this.setState({
      liked: likedIds.includes(this.props.viewer.id),
    });
  }
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  toggleCommentDisplay = () => {
    this.setState({displayCommentInput: !this.state.displayCommentInput});
  };

  toggleLike = async (likeMutation, viewerId, postId) => {
    try {
      await likeMutation({
        variables: {likesPostId: postId, likesUserId: viewerId},
      });
      this.setState({liked: !this.state.liked});
    } catch (e) {
      throw e;
    }
  };

  removePost = async (deletePost, authorId, viewerId, viewerPosts, postId) => {
    const viewerPostIds = viewerPosts.map(post => post.id);

    if (authorId === viewerId && viewerPostIds.includes(postId)) {
      try {
        postId && (await deletePost({variables: {id: postId}}));
        this.hideMenu();
      } catch (e) {
        throw e;
      }
    } else {
      throw new Error('You cannot delete another users post.');
    }
  };

  render() {
    const {post, navigation, faved, addFave, removeFave, viewer} = this.props;
    const newDate = formatDateString(post.createdAt);
    return (
      <View>
        <View style={styles.postWrapper}>
          <View style={styles.topWrapper}>
            <View style={styles.authorWrapper}>
              {post.author.photo.url === null ? (
                <Image
                  style={styles.image}
                  source={require('../../assets/PNG/additional_illustrations/profile.png')}
                />
              ) : (
                <Image
                  style={styles.image}
                  source={{uri: post.author.photo.url}}
                />
              )}

              <View style={styles.nameWrapper}>
                <Text style={styles.name}>
                  {post.author.firstName}
                  <View style={styles.lineB} />
                  {post.author.lastName}
                </Text>
                <Text style={styles.time}>{newDate}</Text>
              </View>
            </View>

            <View style={styles.postBtn}>
              {faved ? (
                <TouchableOpacity onPress={() => removeFave(post.id)}>
                  <AntDesign
                    style={styles.faveActive}
                    size={25}
                    name={'star'}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => addFave(post.id)}>
                  <AntDesign
                    style={styles.faveInactive}
                    size={25}
                    name={'staro'}
                  />
                </TouchableOpacity>
              )}
              <Menu
                ref={this.setMenuRef}
                button={
                  <Entypo
                    name="dots-three-vertical"
                    size={25}
                    onPress={this.showMenu}
                    style={styles.triDotIcon}
                  />
                }>
                <MenuItem onPress={this.hideMenu}>
                  <Ionics
                    name="ios-star-outline"
                    size={15}
                    color={theme.palette.darkGrey}
                  />
                  <Text> Save to favourites</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>
                  <Ionics
                    name="ios-copy"
                    size={15}
                    color={theme.palette.darkGrey}
                  />
                  <Text> Copy link</Text>
                </MenuItem>
                <MenuDivider />

                {viewer.id === post.author.id ? (
                  <Mutation
                    mutation={DELETE_POST_MUTATION}
                    refetchQueries={() => [{query: GET_ALL_POSTS}]}>
                    {deletePost => (
                      <MenuItem
                        onPress={() => {
                          this.removePost(
                            deletePost,
                            post.author.id,
                            viewer.id,
                            viewer.posts,
                            post.id,
                          );
                        }}>
                        <Ionics
                          name="ios-trash"
                          size={15}
                          color={theme.palette.darkGrey}
                        />
                        <Text> Delete post</Text>
                      </MenuItem>
                    )}
                  </Mutation>
                ) : null}
              </Menu>
            </View>
          </View>

          <Text style={styles.content}>{post.content}</Text>

          <View style={styles.responseWrapper}>
            <Entypo
              name={'thumbs-up'}
              size={15}
              color={theme.palette.darkGrey}
            />
            <Text style={styles.response}>{post.likes.length} Likes</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Comments', {comments: post.comments});
              }}
              activeOpacity={0.6}
              style={styles.goToComment}>
              <Ionics
                name={'ios-text'}
                size={15}
                color={theme.palette.darkGrey}
              />
              <Text style={styles.response}>
                {post.comments.length} Comments
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.touchOpWrapper}>
          <Mutation
            mutation={
              this.state.liked ? DISLIKE_POST_MUTATION : LIKE_POST_MUTATION
            }
            refetchQueries={() => [{query: GET_ALL_POSTS}]}>
            {likeMutation => (
              <TouchableOpacity
                style={styles.touchOp}
                onPress={() =>
                  this.toggleLike(likeMutation, viewer.id, post.id)
                }>
                <View style={styles.likeBtn}>
                  <Entypo
                    name={'thumbs-up'}
                    size={15}
                    color={
                      this.state.liked
                        ? theme.palette.green
                        : theme.palette.darkGrey
                    }
                  />
                  {this.state.liked ? (
                    <Text style={styles.like}>Liked</Text>
                  ) : (
                    <Text style={styles.liked}>Like</Text>
                  )}
                </View>
              </TouchableOpacity>
            )}
          </Mutation>

          <TouchableOpacity
            style={styles.touchOp}
            onPress={() =>
              this.setState({
                displayCommentInput: !this.state.displayCommentInput,
              })
            }>
            <View style={styles.commentBtn}>
              <Ionics
                name={'ios-text'}
                size={15}
                color={theme.palette.darkGrey}
              />
              <Text style={styles.touchOpResponse}>Comment</Text>
            </View>
          </TouchableOpacity>
        </View>

        {this.state.displayCommentInput && (
          <CreateComment
            postId={post.id}
            toggleCommentDisplay={this.toggleCommentDisplay}
            viewer={viewer}
          />
        )}
      </View>
    );
  }
}

export default withNavigation(PostList);
