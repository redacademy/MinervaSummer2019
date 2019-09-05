import React, {Component} from 'react';
import {Text} from 'react-native';
import Comments from './Comments';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';
// import console = require('console');
// import console = require('console');

const GET_COMMENTS = gql`
  query {
    allComments(orderBy: createdAt_ASC) {
      content
      author {
        firstName
        lastName
        photo {
          url
        }
      }
      post {
        title
      }
    }
  }
`;

export default class CommentsContainer extends Component {
  render() {
    return (
      <Query query={GET_COMMENTS}>
        {({loading, error, data}) => {
          if (loading) return <CircularLoader />;
          if (error) return <Text>Error!</Text>;
          return data.allComments.map(comment => (
            <Comments comment={comment} />
          ));
        }}
      </Query>
    );
  }
}
