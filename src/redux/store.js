import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "./reducers/authSlice";

export default configureStore({
  reducer: {
    authReducer: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    process.env.NODE_ENV !== "production"
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware(),
});
