import React, {Component} from 'react';
const FavesContext = React.createContext();
import {
  getFaves,
  getToken,
  addFaveId,
  removeFaveId,
  storeToken,
} from '../../config/models';

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewer: null,
      faves: [],
    };
  }
  componentDidMount = async () => {
    try {
      const userToken = await getToken();
      if (userToken) {
        this.setState({viewer: userToken});
        this.updateFaves();
      }
    } catch (e) {
      throw e;
    }
  };
  updateFaves = async () => {
    const faves = await getFaves(this.state.viewer);
    if (faves !== null) {
      this.setState({faves: faves});
    }
  };
  addFave = async postId => {
    try {
      const newFaves = await addFaveId(this.state.viewer, postId);
      this.setState({faves: newFaves});
    } catch (e) {
      throw e;
    }
  };
  removeFave = async postId => {
    try {
      const newFaves = await removeFaveId(this.state.viewer, postId);
      this.setState({faves: newFaves});
    } catch (e) {
      throw e;
    }
  };
  updateViewer = async (newViewerObject, token) => {
    try {
      const updatedViewer = await storeToken({
        ...newViewerObject,
        token: token,
      });
      this.setState({viewer: updatedViewer});
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFave: this.addFave,
          removeFave: this.removeFave,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export {FavesProvider};
export default FavesContext;
