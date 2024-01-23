import { configureStore, createSlice } from "@reduxjs/toolkit";
import Tuser from "../.expo/types/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    sid: "",
    uid: 0,
    name: "",
    lat: "",
    long: "",
    time: "",
    life: 0,
    experience: 0,
    weapon: "",
    armor: "",
    amulet: "",
    picture: "",
    profileversion: 0,
  },
  reducers: {
    // Action to set the user data
    setUserData(state, action) {
      state = action.payload;
      return action.payload;
    },
    // Action to clear the user data
    clearUserData(state) {
      state = {
        sid: "",
        uid: 0,
        name: "",
        lat: "",
        long: "",
        time: "",
        life: 0,
        experience: 0,
        weapon: "",
        armor: "",
        amulet: "",
        picture: "",
        profileversion: 0,
      };
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

const userStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default userStore;
