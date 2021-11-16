import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./reducers/authSlice";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  authReducer: authReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authReducer"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
