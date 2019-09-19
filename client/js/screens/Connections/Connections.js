import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import UserCard from '../../components/UserCard';
import styles from './styles';
import GradientButton from '../../components/GradientButton';
import PendingList from '../../components/PendingList';

displaySuggestions = (suggestedUsers, viewer) => {
  if (suggestedUsers.length === 0) {
    return (
      <Text>
        Were sorry, we could not find any suggestions for you at this time.
      </Text>
    );
  }

  return suggestedUsers
    .filter(user => {
      return (
        user.id != viewer.id &&
        user.id != viewer.userConnections.map(connections => connections.id)
      );
    })
    .map(user => <UserCard user={user} key={user.id} />);
};

displayNoConnections = () => {
  return (
    <View style={styles.noConnectionsWrapper}>
      <Image
        style={styles.profilePicture}
        source={require('../../assets/PNG/additional_illustrations/connections.png')}
      />
      <View>
        <Text style={styles.noConnectionsHeading}>
          You don't have any connections yet!
        </Text>
        <Text style={styles.noConnectionsSubHeading}>
          Go ahead and say hello! Find new connections in the suggested tab.
        </Text>
      </View>
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

displayConnected = viewer => {
  return viewer.userConnections.length === 0
    ? displayNoConnections()
    : viewer.userConnections.map(user => (
        <UserCard user={user} key={user.id}></UserCard>
      ));
};

pendingRequests = viewer => {
  return <PendingList user={viewer} />;
};

const Connections = ({suggestedUsers, viewer, selectState, insertState}) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.headingsWrapper}>
        <View style={[styles.topicButtonsWrapper]}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => insertState('Suggested')}
            style={[
              styles.topic,
              styles.suggested,
              selectState() === 'Suggested'
                ? styles.topicActive
                : styles.topicInactive,
            ]}>
            <Text
              style={
                selectState() === 'Suggested'
                  ? styles.topicTextActive
                  : styles.topicTextInactive
              }>
              Suggested
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => insertState('Connected')}
            style={[
              styles.topic,
              styles.connected,
              selectState() === 'Connected'
                ? styles.topicActive
                : styles.topicInactive,
            ]}>
            <Text
              style={
                selectState() === 'Connected'
                  ? styles.topicTextActive
                  : styles.topicTextInactive
              }>
              Connected
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => insertState('Pending')}
            style={[
              styles.topic,
              styles.pending,
              selectState() === 'Pending'
                ? styles.topicActive
                : styles.topicInactive,
            ]}>
            <Text
              style={
                selectState() === 'Pending'
                  ? styles.topicTextActive
                  : styles.topicTextInactive
              }>
              Pending
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectState() === 'Suggested'
        ? this.displaySuggestions(suggestedUsers, viewer)
        : selectState() === 'Connected'
        ? this.displayConnected(viewer)
        : selectState() === 'Pending'
        ? this.pendingRequests(viewer)
        : null}
    </ScrollView>
  );
};

export default Connections;
