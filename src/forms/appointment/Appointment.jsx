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
} from "./appointmentFormValues";
import "./Appointment.scss";
import { useSelector } from "react-redux";
import axiosInstance from "../../api/axiosInstance";
import { addAppointment } from "../../redux/reducers/appointmentsSlice";
import { useDispatch } from "react-redux";

const Appointment = ({ onClose, isOpen }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [doctors, setDoctors] = useState([]);
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const toast = useToast();
  console.log("Form values: ", formValues);

  useEffect(() => {
    axiosInstance
      .get("/doctors/all")
      .then((response) => setDoctors(response.data))
      .catch((e) => {
        console.log("Error occured in fetching doctors: ", { ...e });
      });
  }, []);

  const onInputChange = (e) => {
    setFormValues((prev) => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value;
      return newValues;
    });
  };

  const bookAppointment = async () => {
    if (validateValues(formValues, toast)) {
      setFormSubmitting(true);
      try {
        await axiosInstance.put("/appointments", {
          ...formValues,
          patient_id: user._id,
        });
        showToast(toast, "Appointment request was sent", "success");
        dispatch(addAppointment({ ...formValues, patient_id: user._id }));
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
        <ModalHeader textAlign="left">Book an appointment</ModalHeader>
        <ModalCloseButton />
        <ModalBody w={"92%"} p={0} pr={4} overflowY="scroll">
          <div className="appointmentForm">
            <div class="inputBx">
              <span>Patient ID</span>
              <input
                type="text"
                name="patient_id"
                value={user._id}
                disabled
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Doctor ID</span>
              <div class="custom_select">
                <Select
                  _focus={{ outline: "none" }}
                  border="1px solid #212121 !important"
                  placeholder="Select doctor's ID"
                  value={formValues.doctor_info._id}
                  name="doctor_info"
                  onChange={(e) => {
                    setFormValues((prev) => {
                      const newValues = { ...prev };
                      newValues[e.target.name] = JSON.parse(e.target.value);
                      return newValues;
                    });
                  }}
                >
                  {doctors.map((doctor) => {
                    const {
                      first_name,
                      last_name,
                      _id,
                      institute_id,
                      speciality,
                    } = doctor;
                    return (
                      <option
                        key={_id}
                        value={JSON.stringify({
                          id: _id,
                          first_name,
                          last_name,
                          institute_id,
                          speciality,
                        })}
                      >
                        {`Dr. ${first_name} ${last_name} (${speciality})`}
                      </option>
                    );
                  })}
                </Select>
              </div>
            </div>

            <div class="inputBx">
              <span>Appointment Mode</span>
              <div class="custom_select">
                <Select
                  _focus={{ outline: "none" }}
                  border="1px solid #212121 !important"
                  placeholder="Select a mode of appointment"
                  onChange={onInputChange}
                  value={formValues.appointment_mode}
                  name="appointment_mode"
                >
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </Select>
              </div>
            </div>

            <div class="inputBx">
              <span>Preferred Appointment Date</span>
              <input
                type="date"
                name="appointment_date"
                value={formValues.appointment_date}
                onChange={onInputChange}
              />
            </div>

            <div class="inputBx">
              <span>Preferred Appointment Time</span>
              <input
                type="time"
                name="appointment_time"
                value={formValues.appointment_time}
                onChange={onInputChange}
              />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input
                type="text"
                name="appointment_reason"
                value={formValues.appointment_reason}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Additional Notes</span>
              <input
                type="text"
                name="additional_notes"
                value={formValues.additional_notes}
                onChange={onInputChange}
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="actionWrapper">
            <button
              className={`bookBtn ${isFormSubmitting ? "disabledBtn" : ""}`}
              disabled={isFormSubmitting}
              onClick={bookAppointment}
            >
              Confirm
            </button>
            <button className="cancelBtn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Appointment;
