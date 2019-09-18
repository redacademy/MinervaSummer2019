import AsyncStorage from '@react-native-community/async-storage';

export const storeToken = async userToken => {
  try {
    await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
    return userToken;
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

export const getFaves = async viewerId => {
  try {
    const faves = await AsyncStorage.getItem(viewerId);
    return faves;
  } catch (e) {
    throw Error(e);
  }
};

export const addFaveId = async (viewerId, postId) => {
  try {
    const favesString = await AsyncStorage.getItem(viewerId);
    const newFaves =
      favesString === null ? `${postId}` : favesString + `,${postId}`;
    await AsyncStorage.setItem(viewerId, newFaves);
    return newFaves.split(',');
  } catch (e) {
    throw Error(e);
  }
};
export const removeFaveId = async (viewerId, postId) => {
  try {
    const favesString = await AsyncStorage.getItem(viewerId);
    const newFaves = favesString.split(',').filter(fave => fave !== postId);
    await AsyncStorage.setItem(viewerId, newFaves.join(','));
    return newFaves;
  } catch (e) {
    throw Error(e);
  }
};
