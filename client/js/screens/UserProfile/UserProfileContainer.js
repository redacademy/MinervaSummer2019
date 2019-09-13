import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import UserProfile from './UserProfile';
import {gql} from 'apollo-boost';
import {Query} from '@apollo/react-components';
import {removeToken} from '../../config/models';
import styles from './styles';
import FavesContext from '../../context/FavesContext';
import CircularLoader from '../../components/CircularLoader';
import {withNavigation} from 'react-navigation';

const GET_ALL_INTEREST = gql`
  query {
    allInterests {
      id
      title
      type
    }
  }
`;

class UserProfileContainer extends Component {
  static navigationOptions = ({navigation, screenprops}) => ({
    title: 'Profile',
    headerRight: (
      <TouchableOpacity
        onPress={async () => {
          try {
            removeToken();
            navigation.navigate('AuthLoading');
          } catch (e) {
            throw Error(e);
          }
        }}>
        <Text style={styles.logout}>Sign Out </Text>
      </TouchableOpacity>
    ),
  });
  render() {
    return (
      <FavesContext.Consumer>
        {context => {
          return (
            <Query query={GET_ALL_INTEREST}>
              {({loading, error, data}) => {
                if (loading) return <CircularLoader />;
                if (error) return <Text>Error!</Text>;
                return (
                  <UserProfile
                    context={context}
                    navigation={this.props.navigation}
                    info={data}
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

export default withNavigation(UserProfileContainer);
