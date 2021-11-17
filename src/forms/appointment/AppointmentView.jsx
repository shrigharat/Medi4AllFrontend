import { Select } from "@chakra-ui/select";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import {
  initialFormValues,
  showToast,
  validateValues,
  confirmedFormValues
} from "./appointmentFormValues";
import "./Appointment.scss";
import { useSelector } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import userTypes from "../../utils/userTypes";

const AppointmentView = ({ appointment, isOpen, onClose }) => {
  const [formValues, setFormValues] = useState(confirmedFormValues);
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const { userType, user } = useSelector((state) => state.authReducer);
  const toast = useToast();
  console.log("Form values: ", formValues);

  const onInputChange = (e) => {
    setFormValues((prev) => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value;
      return newValues;
    });
  };

  const confirmAppointment = async (status) => {
      setFormSubmitting(true);
      try {
        await axiosInstance.patch("/appointments", {
          ...appointment,
          ...formValues,
          is_confirmed: status
        });
        showToast(toast, "Appointment request was sent", "success");
        setFormSubmitting(false);
        setFormValues(initialFormValues);
        onClose();
      } catch (e) {
        console.log("Error creating appointment: ", { ...e });
        showToast(
          toast,
          "There was an error creating your appointment, please try again"
        );
        setFormSubmitting(false);
      }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size={"xl"}
      blockScrollOnMount
    >
      <ModalOverlay />
      <ModalContent h={"90vh"} my={"auto"}>
        <ModalHeader textAlign="left">Appointment details</ModalHeader>
        <ModalCloseButton />
        <ModalBody w={"92%"} p={0} pr={4} overflowY="scroll">
          <div className="appointmentForm">
            <div class="inputBx">
              <span>Patient ID</span>
              <input
                type="text"
                name="patient_id"
                value={appointment.patient_id}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Doctor ID</span>
              <input
                type="text"
                name="patient_id"
                value={`Dr. ${appointment.doctor_info.first_name} ${appointment.doctor_info.last_name} (${appointment.doctor_info.speciality})`}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Appointment Mode</span>
              <input
                type="text"
                value={appointment.appointment_mode}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Preferred Appointment Date</span>
              <input
                type="text"
                name="appointment_date"
                value={appointment.appointment_date}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Preferred Appointment Time</span>
              <input
                type="text"
                name="appointment_time"
                value={appointment.appointment_time}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input
                type="text"
                name="appointment_reason"
                value={appointment.appointment_reason}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Additional Notes</span>
              <input
                type="text"
                name="additional_notes"
                value={appointment.additional_notes}
                disabled
              />
            </div>

            {userType === userTypes.institute && (
              <div class="inputBx">
                <span>Confirmed Date</span>
                <input
                  type="date"
                  name="confirmed_date"
                  value={formValues.confirmed_date}
                  onChange={onInputChange}
                />
              </div>
            )}
            {userType === userTypes.institute && (
              <div class="inputBx">
                <span>Confirmed Time</span>
                <input
                  type="time"
                  name="confirmed_time"
                  value={formValues.confirmed_time}
                  onChange={onInputChange}
                />
              </div>
            )}
          </div>
        </ModalBody>

        {userType === userTypes.institute && (
          <ModalFooter>
            <div className="actionWrapper">
              <button
                className={`bookBtn ${isFormSubmitting ? "disabledBtn" : ""}`}
                disabled={isFormSubmitting}
                onClick={() => {
                  confirmAppointment("Confirmed");
                }}
              >
                Confirm
              </button>
              <button className="cancelBtn" onClick={() => {
                  onClose();
                }} >
                Cancel
              </button>
            </div>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AppointmentView;
