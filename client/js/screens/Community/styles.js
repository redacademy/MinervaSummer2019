import {StyleSheet} from 'react-native';
import theme from '../../config/theme';
import {BorderlessButton} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  postWrapper: {
    paddingVertical: '5%',
    paddingHorizontal: '3%',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  op: {
    borderWidth: 1,
    borderColor: theme.palette.lightGrey,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
  },

  postInput: {
    marginLeft: '5%',
    flexDirection: 'row',
    alignContent: 'center',
  },

  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: '5%',
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
});

export default styles;
