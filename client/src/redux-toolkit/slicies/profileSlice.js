import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const profileSlice = createSlice({
  name: "PROFILE",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserProfile } = profileSlice.actions;

export default profileSlice.reducer;
