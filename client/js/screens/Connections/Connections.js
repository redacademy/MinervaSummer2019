import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import UserCard from '../../components/UserCard';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {getToken} from '../../config/models';
import CircularLoader from '../../components/CircularLoader';
import GradientButton from '../../components/GradientButton';

class Connections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: false,
      viewerId: null,
    };
  }
  componentDidMount = async () => {
    this.setState({viewerId: this.getViewerId()});
  };
  toggleForm() {
    this.setState({formToggle: !this.state.formToggle});
  }
  getViewerId = async () => {
    try {
      const userToken = await getToken();
      this.setState({viewerId: userToken.id});
    } catch (e) {
      console.log(e);
    }
  };
  displayConnected = () => {
    const {allUsers} = this.props;
    const connectedUsers = [];
    if ((connectedUsers.length = [0])) {
      return this.displayNoConnections();
    }
  };
  displayNoConnections = () => {
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
              this.toggleForm();
            }}></GradientButton>
        </View>
      </View>
    );
  };
  displaySuggestions = () => {
    const {allUsers} = this.props;
    return allUsers.map(user => (
      <UserCard user={user} key={user.id}></UserCard>
    ));
  };
  render() {
    !this.state.viewerId ? this.getViewerId : null;
    return (
      <ScrollView>
        <View style={styles.headingsWrapper}>
          <View style={styles.toggleButtonsWrapper}>
            <TouchableOpacity
              onPress={() => this.toggleForm()}
              style={
                !this.state.formToggle
                  ? styles.toggleActive
                  : styles.toggleInactive
              }>
              <Text
                style={
                  !this.state.formToggle
                    ? styles.toggleTextActive
                    : styles.toggleTextInactive
                }>
                Suggested
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.toggleForm()}
              style={
                this.state.formToggle
                  ? styles.toggleActive
                  : styles.toggleInactive
              }>
              <Text
                style={
                  this.state.formToggle
                    ? styles.toggleTextActive
                    : styles.toggleTextInactive
                }>
                Already Connected
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {!this.state.formToggle && this.state.viewerId
          ? this.displaySuggestions()
          : this.displayConnected()}
      </ScrollView>
    );
  }
}

export default Connections;
