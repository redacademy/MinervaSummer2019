import React, {Component} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import Favourites from './Favourites';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
import FavesContext from '../../context/FavesContext';
import styles from './styles';
import {withNavigation} from 'react-navigation';

export const GET_ALL_POSTS = gql`
  query {
    allPosts(orderBy: createdAt_DESC) {
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
      content
      likes {
        id
      }
      comments {
        id
        author {
          firstName
          lastName
          photo {
            url
          }
        }
        content
        likes {
          id
        }
      }
    }
  }
`;

class FavouritesContainer extends Component {
  static navigationOptions = {
    title: 'Favourites',
  };
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_ALL_POSTS} fetchPolicy="network-only">
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;
                const favedPosts = data.allPosts.filter(post =>
                  context.faves.includes(post.id),
                );
                return (
                  <Favourites
                    context={context}
                    posts={favedPosts}
                    navigation={this.props.navigation}
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

export default withNavigation(FavouritesContainer);
