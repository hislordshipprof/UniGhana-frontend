import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import profileSlice from "../slicies/profileSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, profileSlice);

export const store = configureStore({
  reducer: {
    prof: persistedReducer,
  },
});

export const persistor = persistStore(store);
