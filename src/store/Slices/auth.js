import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_TOKEN } from '../../config/Constant';

const initialState = {
  isAuthenticated: false,
  id: null,
  userProfile: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
    },

    setUserid: (state, data) => {
      state.id = data?.payload;
    },
    fetchUserProfile: (state, data) => {
      state.userProfile = data?.payload;
    },
    isUserSignedIn: (state) => {
      return state.isAuthenticated;
    },
  },
});

const checkIfUserIsAuthenticated = async () => {
  const userToken = await AsyncStorage.getItem(USER_TOKEN);
  if (userToken) {
    return true;
  }
  return false;
};

const updateUserStatus = async (userIsAuthenticated) => {
  await AsyncStorage.setItem(USER_TOKEN, userIsAuthenticated);
};
// Action creators are generated for each case reducer function
export const { signIn, signOut, isUserSignedIn, setUserid, fetchUserProfile } =
  authSlice.actions;

export default authSlice.reducer;
