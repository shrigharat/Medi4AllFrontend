const initialFormValues = {
  name: "",
  address: "",
  registration_no: "",
  medical_insurance: [],
  specialities: [],
  postal_code: "",
  contact_no: "",
  helpline_no: "",
  email: "",
  password: "",
  confirm_password: ""
};

const specialities = [
  "Dietetics",
  "Cardiology",
  "Physiology",
  "Neurology",
  "Dental",
  "Any Others +",
];

const insurance = ["All", "Cashless", "Reimbursement", "TPA", "Any Others +"];

const handleChange = (e, setFormValues, key) => {
  console.log("Checkbox event: ", e);
  setFormValues((prev) => {
    let newArr = [...prev[key]];
    if (e.target.checked) {
      //add the value to array
      newArr.push(e.target.value);
    } else {
      //remove the value from array
      newArr = newArr.filter((day) => {
        return day !== e.target.value;
      });
    }
    return { ...prev, key: newArr };
  });
};

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
  if (formValues.email === "") {
    showToast(toast, "Please enter an email");
    return false;
  }
  if (formValues.password === "") {
    showToast(toast, "Please enter a password");
    return false;
  }
  if (formValues.password.length < 5 || formValues.password.length > 15) {
    showToast(
      toast,
      "Password must be greater than 5 and less than 15 characters"
    );
    return false;
  }
  if (formValues.password !== formValues.confirm_password) {
    showToast(toast, "Passwords do not match");
    return false;
  }
  return true;
};

export {
  specialities,
  initialFormValues,
  handleChange,
  insurance,
  validateValues,
};
