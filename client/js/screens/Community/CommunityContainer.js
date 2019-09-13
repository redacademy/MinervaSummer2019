import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import Community from './Community';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import FavesContext from '../../context/FavesContext';
import styles from './styles';
import {withNavigation} from 'react-navigation';
import {GET_ALL_POSTS} from '../../config/apollo/queries';

class CommunityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectPostTpoic: '',
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Community',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
        <Image
          resizeMode={'contain'}
          style={styles.favouriteHeaderIcon}
          source={require('../../assets/PNG/additional_illustrations/favourite.png')}
        />
      </TouchableOpacity>
    ),
  });

  insertState = topic => {
    this.setState({selectPostTpoic: topic});
  };

  getState = () => {
    return this.state.selectPostTpoic;
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_ALL_POSTS}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;
                return (
                  <Community
                    context={context}
                    posts={
                      this.state.selectPostTpoic === ''
                        ? data.allPosts
                        : data.allPosts.filter(
                            posts => posts.type === this.state.selectPostTpoic,
                          )
                    }
                    insertState={this.insertState}
                    getState={this.getState}
                  />
                );
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(CommunityContainer);
