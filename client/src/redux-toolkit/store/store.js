import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../slicies/profileSlice";
export const store = configureStore({
  reducer: {
    prof: profileSlice,
  },
});
