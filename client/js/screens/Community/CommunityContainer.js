import React, {Component} from 'react';
import {Text} from 'react-native';
import Community from './Community';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';

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

export default class CommunityContainer extends Component {
  static navigationOptions = {
    title: 'Community',
  };
  render() {
    return (
      <Query query={GET_ALL_POSTS}>
        {({loading, error, data}) => {
          if (loading) return <CircularLoader />;
          if (error) return <Text>Error!</Text>;
          return <Community posts={data.allPosts} />;
        }}
      </Query>
    );
  }
}
