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

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCommentInput: false,
    };
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
                <MenuItem onPress={this.hideMenu}>
                  <Ionics
                    name="ios-trash"
                    size={15}
                    color={theme.palette.darkGrey}
                  />
                  <Text> Delete post</Text>
                </MenuItem>
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
          <TouchableOpacity style={styles.touchOp}>
            <View style={styles.likeBtn}>
              <Entypo
                name={'thumbs-up'}
                size={15}
                color={theme.palette.darkGrey}
              />
              <Text style={styles.touchOpResponse}>Like</Text>
            </View>
          </TouchableOpacity>

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
