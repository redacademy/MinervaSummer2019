import React from 'react';
import CreatePost from './CreatePost';

export default class CreatePostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPostTpoic: '',
    };
  }

  static navigationOptions = {
    title: 'CreatePost',
  };

  insertState = topic => {
    this.setState({selectPostTpoic: topic});
  };

  getState = () => {
    return this.state.selectPostTpoic;
  };

  render() {
    const {navigation} = this.props;
    const viewer = navigation.getParam('viewer');
    return (
      <CreatePost
        insertChips={this.insertChips}
        getState={this.getState}
        insertState={this.insertState}
        navigation={navigation}
        viewer={viewer}
      />
    );
  }
}
