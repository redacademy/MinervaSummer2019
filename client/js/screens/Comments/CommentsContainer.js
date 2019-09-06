import React, {Component} from 'react';
import {Text} from 'react-native';
import Comments from './Comments';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import CircularLoader from '../../components/CircularLoader';

const GET_COMMENTS = gql`
  query {
    allComments(orderBy: createdAt_ASC) {
      id
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
  static navigationOptions = {
    title: 'Comments',
  };
  render() {
    return (
      <Query query={GET_COMMENTS}>
        {({loading, error, data}) => {
          if (loading) return <CircularLoader />;
          if (error) return <Text>Error!</Text>;
          return <Comments comments={data.allComments} />;
        }}
      </Query>
    );
  }
}
