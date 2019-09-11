import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import Community from './Community';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import FavesContext from '../../context/FavesContext';
import styles from './styles';
import {withNavigation} from 'react-navigation';

export const GET_ALL_POSTS = gql`
  query {
    allPosts(orderBy: createdAt_ASC) {
      author {
        firstName
        lastName
        photo {
          url
        }
      }
      type
      id
      createdAt
      title
      content
      likes {
        id
      }
      comments {
        id
        author {
          firstName
          lastName
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

class CommunityContainer extends Component {
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
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_ALL_POSTS}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;
                if (data)
                  return <Community context={context} posts={data.allPosts} />;
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default withNavigation(CommunityContainer);
