import AsyncStorage from '@react-native-community/async-storage';

export const storeToken = async userToken => {
  try {
    await AsyncStorage.setItem('userToken', userToken);
  } catch (e) {
    throw Error(e);
  }
};
