import React, { useEffect, useState } from "react";
import classes from "./AppointmentsList.module.scss";
import Moment from "react-moment";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAppointments } from "../../../../redux/thunks/appointmentsThunk";
import { useDisclosure } from "@chakra-ui/hooks";
import AppointmentView from "../../../../forms/appointment/AppointmentView";
import userTypes from "../../../../utils/userTypes";
import { useHistory } from "react-router";

const AppointmentsList = () => {
  const history = useHistory();
  const [selectedAppt, setSelectedAppt] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { appointments, loading } = useSelector(
    (state) => state.appointmentsReducer
  );
  const { userType, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  console.log("Current selected appt is: ", selectedAppt);

  useEffect(() => {
    if (appointments.length === 0) {
      dispatch(getAppointments(userType, user._id));
    }
  }, []);

  return loading ? (
    "Loading..."
  ) : (
    <>
      <div className={classes.appointments}>
        {appointments.map((appt) => (
          <article
            className={classes.info_card}
            onClick={() => {
              setSelectedAppt(appt);
              onOpen();
            }}
          >
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
              <div className={classes.action_container}>
                <div className={classes.confirmation_status}>
                  {appt.is_confirmed === ""
                    ? "Not confirmed"
                    : appt.is_confirmed}
                </div>
                {userType === userTypes.doctor ? (
                  <div
                    onClick={() => history.push("/call")}
                    className={classes.start_meet}
                  >
                    Start
                  </div>
                ) : null}
                {userType === userTypes.patient ? (
                  <div
                    onClick={() => history.push("/call")}
                    className={classes.start_meet}
                  >
                    Enter
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
      {selectedAppt && (
        <AppointmentView
          appointment={selectedAppt}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default AppointmentsList;
