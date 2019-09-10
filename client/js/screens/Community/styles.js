import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
import {BorderlessButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  op: {
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 35,
    borderRadius: 50,
  },

  postInput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },

  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: '4%',
  },

  topicsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topic: {
    height: 35,
    borderColor: theme.palette.darkGrey,
  },

  topicText: {
    fontSize: 16,
    color: theme.palette.darkGrey,
  },

  topicSelected: {
    borderColor: theme.palette.blue,
    backgroundColor: theme.palette.blue,
  },

  topicTextSelected: {
    color: '#FFF',
  },

  lineB: {
    width: '100%',
    paddingTop: '4%',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
  },
});

export default styles;
