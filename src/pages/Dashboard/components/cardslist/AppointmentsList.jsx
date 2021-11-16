import React from "react";
import classes from "./AppointmentsList.module.scss";
import Moment from "react-moment";
import moment from "moment";

const appts = [
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
  {
    _id: "6911e2c5dea727d40971e9d7908eca1f",
    _rev: "1-27506829ffdc42bbde5d505a9242edbf",
    additional_notes: "Headache severe",
    appointment_date: "2021-11-25",
    appointment_mode: "Online",
    appointment_reason: "Headache",
    appointment_time: "21:00",
    confirmed_date: "",
    confirmed_time: "",
    createdAt: "2021-11-16T16:24:59.421Z",
    doctor_info: {
      first_name: "Shruti",
      id: "a64226018d9e93c0a383359eb72fd098",
      institute_id: "",
      last_name: "Gharat",
    },
    patient_id: "36b6736272aed83d95b85c351292551d",
  },
];

const AppointmentsList = () => {
  return (
    <section className={classes.appointments}>
      {appts.map((appt) => (
        <article className={classes.info_card}>
          <div className={classes.doctor_icon}>
            <i class="fas fa-user-md"></i>
          </div>
          <div className={classes.doctor_info}>
            <div className={classes.doctor_name}>
              Dr. {appt.doctor_info.first_name} {appt.doctor_info.last_name}
            </div>
            <p className={classes.doctor_speciality}>MBBS</p>
          </div>
          <div className={classes.appointment_desc}>
            <div>{appt.appointment_reason}</div>
            <p>{appt.additional_notes}</p>
          </div>

          <div className={classes.appointment_time}>
            <Moment format="MMMM Do YYYY">
              {appt.confirmed_date === ""
                ? appt.appointment_date
                : appt.confirmed_date}
            </Moment>
            <div>
              {appt.confirmed_time === ""
                ? appt.appointment_time
                : appt.confirmed_time}
            </div>
            <div className={classes.confirmation_status}>{appt.confirmed_date === "" ? "Not confirmed" : "Confirmed"}</div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default AppointmentsList;
