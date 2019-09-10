import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {formatDateString} from '../../lib/helper';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import CreateComment from '../CreateComment';

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
    const {post, navigation} = this.props;
    const newDate = formatDateString(post.createdAt);
    return (
      <View style={styles.container}>
        <View style={styles.postWrapper}>
          <View style={styles.topWrapper}>
            <View style={styles.authorWrapper}>
              <Image
                style={styles.image}
                source={require('../../assets/PNG/additional_illustrations/profile.png')}
              />

              <View style={styles.nameWrapper}>
                <Text>
                  {post.author.firstName}
                  <View style={{width: 2}} />
                  {post.author.lastName}
                </Text>
                <Text style={styles.time}>{newDate}</Text>
              </View>
            </View>

            <View style={styles.postBtn}>
              <Menu
                ref={this.setMenuRef}
                button={
                  <Ionics name="ios-more" size={15} onPress={this.showMenu} />
                }>
                <MenuItem onPress={this.hideMenu}>
                  <Ionics name="ios-star-outline" size={15} />
                  <Text> Save to favourites</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>
                  <Ionics name="ios-copy" size={15} />
                  <Text> Copy link</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.hideMenu}>
                  <Ionics name="ios-trash" size={15} />
                  <Text> Delete post</Text>
                </MenuItem>
              </Menu>
            </View>
          </View>

          <Text style={styles.content}>{post.content}</Text>

          <View style={styles.responseWrapper}>
            <Ionics name={'ios-thumbs-up'} size={15} />
            <Text style={styles.response}>{post.likes.length} Likes</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Comments', {comments: post.comments});
              }}
              activeOpacity={0.6}
              style={styles.goToComment}>
              <Ionics name={'ios-text'} size={15} />
              <Text style={styles.response}>
                {post.comments.length} Comments
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.opWrapper}>
          <TouchableOpacity style={styles.touchOp}>
            <View style={styles.likeBtn}>
              <Ionics name={'ios-thumbs-up'} size={15} />
              <Text style={styles.response}>Like</Text>
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
              <Ionics name={'ios-text'} size={15} />
              <Text style={styles.response}>Comment</Text>
            </View>
          </TouchableOpacity>
        </View>
        {this.state.displayCommentInput && (
          <CreateComment
            postId={post.id}
            toggleCommentDisplay={this.toggleCommentDisplay}
          />
        )}
      </View>
    );
  }
}

export default withNavigation(PostList);
