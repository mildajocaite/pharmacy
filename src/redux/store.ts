import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./item-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, itemSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
