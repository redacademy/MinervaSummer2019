import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  name: {
    fontSize: 21,
    letterSpacing: 0.3,
    lineHeight: 25,
    paddingVertical: 10,
  },
  status: {
    fontSize: 15,
    color: theme.palette.blue,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  locationStatus: {
    fontSize: 12,
    color: theme.palette.darkGrey,
  },
  interest: {
    flex: 1,
    paddingVertical: 20,
  },
  section: {
    flex: 1,
    paddingVertical: 20,
  },
  sectionTitle: {
    textAlign: 'center',
    color: theme.palette.darkGrey,
    fontSize: 17,
  },
  sectionContent: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    textAlign: 'center',
  },
  icon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  globe: {
    paddingVertical: 10,
    fontSize: 15,
    backgroundColor: theme.palette.blue,
    color: 'white',
    fontWeight: '900',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});

export default styles;
