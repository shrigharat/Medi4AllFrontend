import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice = createSlice({
  name: "appointmentsSlice",
  initialState: {
    appointments: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchAppointmentsStart: (state) => {
      state.loading = true;
    },
    fetchAppointmentsSuccess: (state, action) => {
      state.appointments = action.payload;
      state.loading = false;
    },
    fetchAppointmentsFailure: (state) => {
      state.loading = false;
    },
    clearAppointments: (state) => {
      state.appointments = [];
    },
    addAppointment: (state, action) => {
      state.appointments.unshift(action.payload);
    }
  },
});

export const {
  clearAppointments,
  fetchAppointmentsStart,
  fetchAppointmentsFailure,
  fetchAppointmentsSuccess,
  addAppointment
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
