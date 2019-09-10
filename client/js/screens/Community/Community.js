import React, {Component} from 'react';
import PostList from '../../components/PostList';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import SelectableChips from 'react-native-chip/SelectableChips';
import Ionics from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';
import styles from './styles';

class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPostTpoic: [],
    };
  }

  render() {
    const {posts, navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.postWrapper}>
          <TouchableOpacity
            opacity={0.8}
            style={styles.op}
            onPress={() => {
              navigation.navigate('CreatePost');
            }}>
            <View style={styles.postInput}>
              <Ionics name="ios-thought-bubble-outline" size={15} />
              <Text> Share your thoughts here...</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.header}>Topics</Text>

          <View style={styles.topicsWrapper}>
            <SelectableChips
              initialChips={['View All', 'General', 'Events', 'News']}
              onChangeChips={chips => this.setState({selectPostTpoic: chips})}
              chipStyle={styles.topic}
              valueStyle={styles.topicText}
              chipStyleSelected={styles.topicSelected}
              valueStyleSelected={styles.topicTextSelected}
            />
          </View>
        </View>

        {posts.map(post => (
          <PostList key={post.id} post={post} />
        ))}
      </ScrollView>
    );
  }
}

export default withNavigation(Community);
