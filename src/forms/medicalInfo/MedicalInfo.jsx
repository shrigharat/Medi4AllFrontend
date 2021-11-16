import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from "react";
import {
  initialFormValues,
  validateValues,
  frequency,
} from "./medInfoFormValues";
import "./MedicalInfo.scss";
import { Select } from "@chakra-ui/select";

const MedicalInfoForm = ({ onClose, isOpen }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const toast = useToast();
  console.log("Form values: ", formValues);

  const onInputChange = (e) => {
    setFormValues((prev) => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value;
      return newValues;
    });
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
        <ModalHeader textAlign="left">Patient medical info</ModalHeader>
        <ModalCloseButton />
        <ModalBody w={"92%"} p={0} pr={4} overflowY="scroll">
          <div className="medInfoForm">
            <div class="inputBx">
              <span>Patient's ID</span>
              <input
                type="text"
                name="patient_id"
                value={formValues.patient_id}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Hospital Registration Number</span>
              <input
                type="text"
                name="doctor_id"
                value={formValues.doctor_id}
                onChange={onInputChange}
              />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input
                type="text"
                name="medical_condition"
                value={formValues.medical_condition}
                onChange={onInputChange}
              />
            </div>

            <div class="inputBx">
              <span>Oxygen Level</span>
              <input
                type="text"
                name="oxygen_level"
                value={formValues.oxygen_level}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Heart Rate</span>
              <input
                type="text"
                name="heart_rate"
                value={formValues.heart_rate}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Blood Pressure</span>
              <input
                type="text"
                name="blood_pressure"
                value={formValues.blood_pressure}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Weight/Height</span>
              <input
                type="text"
                name="weight_height"
                value={formValues.weight_height}
                onChange={onInputChange}
              />
            </div>

            <div class="inputBx">
              <span>Inborn Disease</span>
              <input
                type="text"
                name="inborn_disease"
                value={formValues.inborn_disease}
                onChange={onInputChange}
              />
            </div>
            <div class="inputBx">
              <span>Current Medication</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Alcohol Consumption</span>
              <Select
                _focus={{ outline: "none" }}
                border="1px solid #212121 !important"
                value={formValues.alcohol_consumption}
                name="alcohol_consumption"
                onChange={onInputChange}
              >
                {frequency.map((freq) => {
                  return <option>{freq}</option>;
                })}
              </Select>
            </div>
            <div class="inputBx">
              <span>Tobacco Consumption</span>
              <Select
                _focus={{ outline: "none" }}
                border="1px solid #212121 !important"
                value={formValues.tobacco_consumption}
                name="tobacco_consumption"
                onChange={onInputChange}
              >
                {frequency.map((freq) => {
                  return <option>{freq}</option>;
                })}
              </Select>
            </div>

            <div class="inputBx">
              <span>Additional Note</span>
              <input type="text" name="" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="actionWrapper">
            <button className="bookBtn">Submit</button>
            <button className="cancelBtn" onClick={onClose}>
              Clear
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MedicalInfoForm;
