import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: theme.fonts.heavy,
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
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    marginTop: 1,
    marginLeft: 1,
    marginBottom: 1,
    marginRight: 1,
    fontFamily: theme.fonts.heavy,
    width: '99%',
  },
});

export default styles;
