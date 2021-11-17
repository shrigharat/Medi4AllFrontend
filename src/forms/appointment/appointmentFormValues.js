const initialFormValues = {
  doctor_info: "",
  address: "",
  appointment_date: "",
  appointment_time: "",
  appointment_mode: "",
  appointment_reason: "",
  additional_notes: "",
  confirmed_time: "",
  confirmed_date: "",
  patient_id: "",
};

const confirmedFormValues = {
  confirmed_time: "",
  confirmed_date: "",
}

const showToast = (toast, message, type = "error") => {
  toast({
    title: message,
    status: type,
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

export { initialFormValues, validateValues, showToast, confirmedFormValues };
