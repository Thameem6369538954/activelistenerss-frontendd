// store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Redux/Slices/authSlice"; // Import your authSlice reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add your authSlice reducer to the root reducer
    // Add more slices here if you have them
  },
});

export default store;
