import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import "./MedicalInfo.scss";

const MedicalInfoView = ({ medHistory, isOpen, onClose }) => {
  console.log("Form values: ", medHistory);

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
                value={medHistory.patient_id}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Doctor ID</span>
              <input
                type="text"
                name="doctor_id"
                value={medHistory.doctor_id}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Symptom or health problem</span>
              <input
                type="text"
                name="medical_condition"
                value={medHistory.medical_condition}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Oxygen Level</span>
              <input
                type="text"
                name="oxygen_level"
                value={medHistory.oxygen_level}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Heart Rate</span>
              <input
                type="text"
                name="heart_rate"
                value={medHistory.heart_rate}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Blood Pressure</span>
              <input
                type="text"
                name="blood_pressure"
                value={medHistory.blood_pressure}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Weight/Height</span>
              <input
                type="text"
                name="weight_height"
                value={medHistory.weight_height}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Inborn Disease</span>
              <input
                type="text"
                name="inborn_disease"
                value={medHistory.inborn_disease}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Current Medication</span>
              <input
                type="text"
                name="current_medication"
                value={medHistory.current_medication}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Alcohol Consumption</span>
              <input
                type="text"
                name="alcohol_consumption"
                value={medHistory.alcohol_consumption}
                disabled
              />
            </div>
            <div class="inputBx">
              <span>Tobacco Consumption</span>
              <input
                type="text"
                name="tobacco_consumption"
                value={medHistory.tobacco_consumption}
                disabled
              />
            </div>

            <div class="inputBx">
              <span>Additional Note</span>
              <input
                type="text"
                name="additional_notes"
                value={medHistory.additional_notes}
                disabled
              />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MedicalInfoView;
