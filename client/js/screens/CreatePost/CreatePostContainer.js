import React from 'react';
import CreatePost from './CreatePost';

export default class CreatePostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPostTpoic: [],
    };
  }

  static navigationOptions = {
    title: 'CreatePost',
  };

  insertChips = chips => {
    this.setState({selectPostTpoic: chips});
  };

  render() {
    return <CreatePost insertChips={insertChips} />;
  }
}
