// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from './reducers'; // Adjust the import path

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
