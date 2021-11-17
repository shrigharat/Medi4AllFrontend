import axiosInstance from "../../api/axiosInstance";
import { fetchHistoryFailure, fetchHistoryStart, fetchHistorySuccess } from "../reducers/medHistorySlice";

const getMedHistory = (userType, userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchHistoryStart());
      const response = await axiosInstance.post("/medHistory/all", {
        userType,
        userId,
      });
      dispatch(fetchHistorySuccess(response.data));
    } catch (e) {
      console.log("Could not fetch medical History for " + userType);
      dispatch(fetchHistoryFailure());
    }
  };
};

export {getMedHistory};
