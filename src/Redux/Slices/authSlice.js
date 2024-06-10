// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      console.log(action.payload.data.user, "this is in auth sliceee");
      // const {Token,user} =action.payload;
      state.isAuthenticated = true;
      const user = action.payload.data.user;
      state.accessToken = action.payload.data.Token;
      state.user = user;
      localStorage.setItem("accessToken", action.payload.data.Token);
      localStorage.setItem("user", JSON.stringify(user));
    },
    setUser(state, action) {
      console.log(action, "set userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
      const user = action.payload.user;
      state.isAuthenticated = true;
      const { token } = action.payload;
      // const {token} =action.payload.token
      state.user = JSON.parse(user);
      state.accessToken = token;
      // localStorage.setItem('user', user);
      // localStorage.setItem('accessToken', token);
    },
    updateUserProfile(state, action) {
      console.log(action,"oiii")
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, setUser, logout, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
