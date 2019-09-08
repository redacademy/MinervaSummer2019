import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flex: 1,
  },
  buttonOutlined: {
    borderRadius: 5,
    overflow: 'visible',
    display: 'flex',
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: 0,
    margin: 0,
    borderRadius: 5,
  },
  buttonTextOutlined: {
    backgroundColor: 'white',
    color: theme.palette.blue,
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginTop: 1,
    marginLeft: 1,
    marginBottom: 1,
    marginRight: 1,
  },
});

export default styles;
