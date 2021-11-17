const initialFormValues = {
  patient_id: "",
  doctor_id: "",
  medical_condition: "",
  condition_description: "",
  blood_pressure: "",
  oxygen_level: "",
  weight_height: "",
  heart_rate: "",
  prescription: "",
  alcohol_consumption: "",
  tobacco_consumption: "",
  inborn_disease: "",
  current_medication: "",
  current_medication_description: "",
  additional_notes: ""
};

const frequency = ["NA", "Daily", "Weekly", "Monthly", "Occasionally"];

const showToast = (toast, message) => {
  toast({
    title: message,
    status: "error",
    duration: 3000,
    isClosable: true,
    variant: "solid",
    position: "top-right",
  });
};

const validateValues = (formValues, toast) => {
  if (formValues.appointment_date === "") {
    showToast(toast, "Please select a preferred appointment date");
    return false;
  }
  if (formValues.appointment_time === "") {
    showToast(toast, "Please select a preferred appointment time");
    return false;
  }
  if (formValues.doctor_id === "") {
    showToast(toast, "Please select a doctor");
    return false;
  }
  if (formValues.appointment_reason === "") {
    showToast(toast, "Please state a brief reason for appointment");
    return false;
  }
  return true;
};

export { initialFormValues, validateValues, frequency };
