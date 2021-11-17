import { configureStore, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"
import { persistReducer } from 'redux-persist';
import { applyMiddleware, combineReducers } from "redux";
import authReducer from "./reducers/authSlice";
import appointmentsReducer from "./reducers/appointmentsSlice";
import medHistoryReducer from "./reducers/medHistorySlice";

const reducers = combineReducers({
  authReducer: authReducer,
  appointmentsReducer,
  medHistoryReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["authReducer"]
};

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});
