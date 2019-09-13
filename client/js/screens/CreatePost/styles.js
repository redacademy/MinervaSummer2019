import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  inputWrapper: {
    minHeight: '30%',
    paddingHorizontal: '5%',
  },

  input: {
    minHeight: '30%',
    fontSize: 16,
  },

  chips: {
    backgroundColor: '#F3F3F3',
    height: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
  },

  header: {
    textAlign: 'center',
    fontSize: 16,
  },

  opWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  topic: {
    height: 35,
    width: 80,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topicInactive: {
    borderColor: theme.palette.darkGrey,
  },

  topicActive: {
    borderColor: theme.palette.blue,
    backgroundColor: theme.palette.blue,
  },

  topicText: {
    fontSize: 16,
    textAlign: 'center',
  },

  topicTextInactive: {
    color: theme.palette.darkGrey,
  },

  topicTextActive: {
    color: '#FFF',
  },

  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    borderBottomWidth: 1,
    borderColor: theme.palette.lightGrey,
    paddingVertical: 5,
  },

  icons: {
    paddingHorizontal: '3%',
  },

  postBtn: {
    paddingTop: '8%',
    alignItems: 'center',
    height: '20%',
  },
});

export default styles;
