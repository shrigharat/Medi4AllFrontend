import axiosInstance from "../../api/axiosInstance";
import { fetchAppointmentsFailure, fetchAppointmentsStart, fetchAppointmentsSuccess } from "../reducers/appointmentsSlice";

const getAppointments = (userType, userId) => {
  return async (dispatch) => {
    try {
      dispatch(fetchAppointmentsStart());
      const response = await axiosInstance.post("/appointments/all", {
        userType,
        userId,
      });
      dispatch(fetchAppointmentsSuccess([...response.data.reverse()]));
    } catch (e) {
      console.log("Could not fetch appointments for " + userType);
      dispatch(fetchAppointmentsFailure());
    }
  };
};

export {getAppointments};
