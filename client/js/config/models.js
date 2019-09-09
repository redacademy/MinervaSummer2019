import AsyncStorage from '@react-native-community/async-storage';

export const storeToken = async userToken => {
  try {
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
  } catch (e) {
    throw Error(e);
  }
};

export const getToken = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    return JSON.parse(userToken);
  } catch (e) {
    throw Error(e);
  }
};
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    throw Error(e);
  }
};

export const addFave = async () => {
  try {
  } catch (e) {
    throw Error(e);
  }
};
