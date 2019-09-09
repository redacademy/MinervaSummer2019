import React from 'react';
import {Tex, ScrollView} from 'react-native';
import UserCard from '../../components/UserCard';

class Connections extends React.Component {
  render() {
    const {allUsers} = this.props;
    return (
      <ScrollView>
        {allUsers.map(user => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </ScrollView>
    );
  }
}

export default Connections;
