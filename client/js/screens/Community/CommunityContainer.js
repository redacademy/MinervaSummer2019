import React, {Component} from 'react';
import {Text} from 'react-native';
import Community from './Community';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
// import console = require('console');

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
      createdAt
      title
      content
    }
  }
`;

export default class CommunityContainer extends Component {
  render() {
    return (
      <Query query={GET_ALL_POSTS}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) return <CircularLoader />;
          if (error) return <Text>Error!</Text>;
          return data.allPosts.map(post => <Community post={post} />);
        }}
      </Query>
    );
  }
}
