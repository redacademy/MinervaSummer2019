import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import UserCard from '../../components/UserCard';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import theme from '../../config/theme';

displaySuggestions = suggestedUsers => {
  if (suggestedUsers.length === 0) {
    return (
      <Text>
        Were sorry, we could not find any suggestions for you at this time.
      </Text>
    );
  }
  return suggestedUsers.map(user => (
    <UserCard user={user} key={user.id}></UserCard>
  ));
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
      <View style={styles.noConnectionsButtonWrapper}>
        <GradientButton
          text={'View Suggested'}
          onPress={() => {
            toggleForm();
          }}></GradientButton>
      </View>
    </View>
  );
};

displayConnected = (toggleForm, suggestedUsers) => {
  const connectedUsers = [];
  if ((connectedUsers.length = [0])) {
    return displayNoConnections(toggleForm);
  }
};

const Connections = ({state, suggestedUsers, toggleForm, viewer}) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headingsWrapper}>
        <View
          style={[
            styles.toggleButtonsWrapper,
            !state.formToggle
              ? {backgroundColor: 'white'}
              : {backgroundColor: theme.palette.blue},
          ]}>
          <TouchableOpacity
            activeOpacity={0.8}
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
            activeOpacity={0.8}
            onPress={() => toggleForm()}
            style={[
              state.formToggle ? styles.toggleActive : styles.toggleInactive,
              {borderRadius: 5},
            ]}>
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
      {state.formToggle
        ? this.displaySuggestions(suggestedUsers, viewer)
        : this.displayConnected(toggleForm, suggestedUsers)}
    </ScrollView>
  );
};

export default Connections;
