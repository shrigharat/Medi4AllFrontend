import React, { useEffect, useState } from "react";
import classes from "./MedHistoryList.module.scss";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { getMedHistory } from "../../../../redux/thunks/medHistoryThunks";
import { useDisclosure } from "@chakra-ui/hooks";
import MedicalInfoView from "../../../../forms/medicalInfo/MedicalInfoView";
import userTypes from "../../../../utils/userTypes";

const MedHistoryList = () => {
  const [selectedMedHistory, setSelectedMedHistory] = useState(null);
  const { medHistory, loading } = useSelector(
    (state) => state.medHistoryReducer
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userType, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userType === userTypes.patient && medHistory.length === 0) {
      dispatch(getMedHistory(userType, user._id));
    }
  }, []);

  return loading ? (
    "Loading..."
  ) : (
    <>
      <section className={classes.medhistory}>
        {medHistory.map((hist) => (
          <article
            className={classes.history_card}
            onClick={() => {
              setSelectedMedHistory(hist);
              onOpen();
            }}
          >
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
      {selectedMedHistory && (
        <MedicalInfoView
          medHistory={selectedMedHistory}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default MedHistoryList;
