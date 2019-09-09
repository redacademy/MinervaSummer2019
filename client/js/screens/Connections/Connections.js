import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import UserCard from '../../components/UserCard';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {getToken} from '../../config/models';
import CircularLoader from '../../components/CircularLoader';
import GradientButton from '../../components/GradientButton';

displaySuggestions = allUsers => {
  return allUsers.map(user => <UserCard user={user} key={user.id}></UserCard>);
};

displayNoConnections = toggleForm => {
  return (
    <View style={styles.noConnectionsWrapper}>
      <Image
        style={styles.profilePicture}
        source={require('../../assets/PNG/additional_illustrations/connections.png')}
      />
      <Text style={styles.noConnectionsHeading}>
        You don't have any connections yet!
      </Text>
      <Text style={styles.noConnectionsSubHeading}>
        Go ahead and say hello! Find new connections in the suggested tab.
      </Text>
      <View>
        <GradientButton
          text={'View Suggested'}
          onPress={() => {
            toggleForm();
          }}></GradientButton>
      </View>
    </View>
  );
};

displayConnected = (toggleForm, allUsers) => {
  const connectedUsers = [];
  if ((connectedUsers.length = [0])) {
    return displayNoConnections(toggleForm);
  }
};

const Connections = ({state, allUsers, toggleForm}) => {
  return (
    <ScrollView>
      <View style={styles.headingsWrapper}>
        <View style={styles.toggleButtonsWrapper}>
          <TouchableOpacity
            onPress={() => toggleForm()}
            style={
              !state.formToggle ? styles.toggleActive : styles.toggleInactive
            }>
            <Text
              style={
                !state.formToggle
                  ? styles.toggleTextActive
                  : styles.toggleTextInactive
              }>
              Suggested
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleForm()}
            style={
              state.formToggle ? styles.toggleActive : styles.toggleInactive
            }>
            <Text
              style={
                state.formToggle
                  ? styles.toggleTextActive
                  : styles.toggleTextInactive
              }>
              Already Connected
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {!state.formToggle
        ? this.displaySuggestions(allUsers)
        : this.displayConnected(toggleForm, allUsers)}
    </ScrollView>
  );
};

export default Connections;
