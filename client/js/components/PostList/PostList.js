import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {formatDateString} from '../../lib/helper';
import Ionics from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

class PostList extends Component {
  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
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
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
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
                navigation.navigate('Comments');
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

          <TouchableOpacity style={styles.touchOp}>
            <View style={styles.commentBtn}>
              <Ionics name={'ios-text'} size={15} />
              <Text style={styles.response}>Comment</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(PostList);
