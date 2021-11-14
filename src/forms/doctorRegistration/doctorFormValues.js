const initialFormValues = {
  first_name: "",
  last_name: "",
  dob: "",
  age: "",
  email: "",
  phone_no: "",
  address: "",
  postal_code: "",
  password: "",
  confirm_password: "",
  gender: "",
  institute_id: "",
  years_of_experience: "",
  degree: "",
  availability: [],
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Everyday",
];

const degrees = ["MBBS", "BDS", "MD", "MS", "DM"];

const genders = {
  male: "male",
  female: "female",
  preferNS: "prefer not to say",
};

const handleChange = (e, setFormValues) => {
  console.log("Checkbox event: ", e);
  setFormValues((prev) => {
    let newArr = [...prev.availability];
    if (e.target.checked) {
      //add the value to array
      newArr.push(e.target.value);
    } else {
      //remove the value from array
      newArr = newArr.filter((day) => {
        return day !== e.target.value;
      });
    }
    return { ...prev, availability: newArr };
  });
  // console.log("Checked items: ", array);
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
  genders,
  initialFormValues,
  handleChange,
  days,
  degrees,
  validateValues,
};
