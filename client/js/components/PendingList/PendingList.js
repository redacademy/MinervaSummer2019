import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import RequestsSent from '../RequestsSent';
import RequestsReceived from '../RequestsReceived';

class PendingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
    };
  }

  toggleForm = () => {
    this.setState({formToggle: !this.state.formToggle});
  };

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topicButtonsWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.toggleForm()}
            style={[
              styles.topic,
              this.state.formToggle ? styles.topicActive : styles.topicInactive,
            ]}>
            <Text
              style={
                this.state.formToggle
                  ? styles.topicTextActive
                  : styles.topicTextInactive
              }>
              Reguests Sent
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.toggleForm()}
            style={[
              styles.topic,
              !this.state.formToggle
                ? styles.topicActive
                : styles.topicInactive,
            ]}>
            <Text
              style={
                !this.state.formToggle
                  ? styles.topicTextActive
                  : styles.topicTextInactive
              }>
              Reguests Received
            </Text>
          </TouchableOpacity>
        </View>

        {this.state.formToggle ? (
          <RequestsSent viewer={user} />
        ) : (
          <RequestsReceived viewer={user} />
        )}
      </View>
    );
  }
}

export default PendingList;
