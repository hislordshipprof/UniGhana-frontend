import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  school: [],
};

export const profileSlice = createSlice({
  name: "PROFILE",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
    setUpdateSchool: (state, action) => {
      state.school = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile, setUpdateSchool } = profileSlice.actions;

export default profileSlice.reducer;
