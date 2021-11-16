import React from "react";
import classes from "./MedHistoryList.module.scss";
import Moment from "react-moment";

const histories = [
  {
    _id: "b0264bfd9c5c39ab872a86e411f1d737",
    alcohol_consumption: "NA",
    blood_pressure: "130/80",
    createdAt: "2021-11-15T19:34:17.512Z",
    condition_description:
      "Migraine causing severe eadaches and loss of concentration",
    current_medication: "Dolo",
    current_medication_description: "Eat dolo stay solo",
    doctor_id: "doctorid123",
    inborn_disease: "Asthma",
    medical_condition: "Migraine",
    oxygen_level: "98%",
    patient_id: "36b6736272aed83d95b85c351292551d",
    prescription: "Naprocin",
    tobacco_consumption: "NA",
    doctor_info: {
      _id: "a64226018d9e93c0a383359eb72fd098",
      first_name: "Shruti",
      last_name: "Gharat",
      speciality: "General medicine",
    },
  },
  {
    _id: "b0264bfd9c5c39ab872a86e411f1d737",
    alcohol_consumption: "NA",
    blood_pressure: "130/80",
    createdAt: "2021-11-15T19:34:17.512Z",
    condition_description:
      "Migraine causing severe eadaches and loss of concentration",
    current_medication: "Dolo",
    current_medication_description: "Eat dolo stay solo",
    doctor_id: "doctorid123",
    inborn_disease: "Asthma",
    medical_condition: "Migraine",
    oxygen_level: "98%",
    patient_id: "36b6736272aed83d95b85c351292551d",
    prescription: "Naprocin",
    tobacco_consumption: "NA",
    doctor_info: {
      _id: "a64226018d9e93c0a383359eb72fd098",
      first_name: "Shruti",
      last_name: "Gharat",
      speciality: "General medicine",
    },
  },
  {
    _id: "b0264bfd9c5c39ab872a86e411f1d737",
    alcohol_consumption: "NA",
    createdAt: "2021-11-15T19:34:17.512Z",
    blood_pressure: "130/80",
    condition_description:
      "Migraine causing severe eadaches and loss of concentration",
    current_medication: "Dolo",
    current_medication_description: "Eat dolo stay solo",
    doctor_id: "doctorid123",
    inborn_disease: "Asthma",
    medical_condition: "Migraine",
    oxygen_level: "98%",
    patient_id: "36b6736272aed83d95b85c351292551d",
    prescription: "Naprocin",
    tobacco_consumption: "NA",
    doctor_info: {
      _id: "a64226018d9e93c0a383359eb72fd098",
      first_name: "Shruti",
      last_name: "Gharat",
      speciality: "General medicine",
    },
  },
  {
    _id: "b0264bfd9c5c39ab872a86e411f1d737",
    alcohol_consumption: "NA",
    blood_pressure: "130/80",
    createdAt: "2021-11-15T19:34:17.512Z",
    condition_description:
      "Migraine causing severe eadaches and loss of concentration",
    current_medication: "Dolo",
    current_medication_description: "Eat dolo stay solo",
    doctor_id: "doctorid123",
    inborn_disease: "Asthma",
    medical_condition: "Migraine",
    oxygen_level: "98%",
    patient_id: "36b6736272aed83d95b85c351292551d",
    prescription: "Naprocin",
    tobacco_consumption: "NA",
    doctor_info: {
      _id: "a64226018d9e93c0a383359eb72fd098",
      first_name: "Shruti",
      last_name: "Gharat",
      speciality: "General medicine",
    },
  },
];

const MedHistoryList = () => {
  return (
    <section className={classes.medhistory}>
      {histories.map((hist) => (
        <article className={classes.history_card}>
          <div className={classes.doctor_icon}>
            <i class="fas fa-notes-medical"></i>
          </div>
          <div className={classes.doctor_info}>
            <div className={classes.doctor_name}>
              Dr. {hist.doctor_info.first_name} {hist.doctor_info.last_name}
            </div>
            <p className={classes.doctor_speciality}>
              {hist.doctor_info.speciality}
            </p>
          </div>
          <div className={classes.appointment_desc}>
            <div>{hist.medical_condition}</div>
          </div>

          <div className={classes.appointment_time}>
            <Moment format="MMMM Do YYYY">{hist.createdAt}</Moment>
          </div>
        </article>
      ))}
    </section>
  );
};

export default MedHistoryList;
