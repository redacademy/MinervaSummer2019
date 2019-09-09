import React, {Component} from 'react';
import Comments from './Comments';

export default class CommentsContainer extends Component {
  static navigationOptions = {
    title: 'Comments',
  };
  render() {
    const comments = this.props.navigation.getParam('comments');
    return <Comments comments={comments} />;
  }
}
