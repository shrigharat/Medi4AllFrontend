import { Radio, RadioGroup } from "@chakra-ui/radio";
import axiosInstance from "../../api/axiosInstance";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserRegistration.scss";

const UserRegistration = () => {
  const genders = {
    male: "male",
    female: "female",
    preferNS: "prefer not to say",
  };
  const [isFormSubmitting, setFormSubmitting] = useState(false);

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
    gender: "",
  };
  const [formValues, setformValues] = useState(initialFormValues);

  console.log("Form values USER: ", formValues);

  const onInputChange = (e) => {
    setformValues((prev) => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value;
      return newValues;
    });
  };

  const userRegister = async () => {
    try {
      setFormSubmitting(true);
      const age =
        new Date().getFullYear() - new Date(formValues.dob).getFullYear();
      console.log("Age: ", age);
      const userObject = { ...formValues, age };
      const response = await axiosInstance.put("/users", userObject);
      console.log("User registration successfull: ", response);
      setformValues(initialFormValues);
      setFormSubmitting(false);
    } catch (e) {
      console.log("Error: ", e);
      setFormSubmitting(false);
    }
  };

  return (
    <div className="userRegister">
      <div className="inputRow">
        <div class="inputBx">
          <span>First Name</span>
          <input
            type="text"
            name="first_name"
            value={formValues.first_name}
            onChange={onInputChange}
          />
        </div>
        <div class="inputBx">
          <span>Last Name</span>
          <input
            type="text"
            name="last_name"
            value={formValues.last_name}
            onChange={onInputChange}
          />
        </div>
      </div>
      <div class="inputBx">
        <span>Email Address</span>
        <input
          type="text"
          name="email"
          value={formValues.email}
          onChange={onInputChange}
        />
      </div>
      <div className="inputRow">
        <div class="inputBx">
          <span>Contact Number</span>
          <input
            type="phone"
            name="phone_no"
            value={formValues.phone_no}
            onChange={onInputChange}
          />
        </div>
        <div class="inputBx">
          <span>Date Of Birth</span>
          <input
            type="date"
            name="dob"
            value={formValues.dob}
            onChange={onInputChange}
          />
        </div>
      </div>

      <p className="selectGender">Select gender</p>
      <RadioGroup
        colorScheme="med"
        onChange={(e) => {
          setformValues((prev) => ({ ...prev, gender: e }));
        }}
        value={formValues.gender}
      >
        <div className="radioContainer">
          <Radio _focus={{ outline: "none" }} size="md" value={genders.male}>
            Male
          </Radio>
          <Radio _focus={{ outline: "none" }} size="md" value={genders.female}>
            Female
          </Radio>
          <Radio
            _focus={{ outline: "none" }}
            size="md"
            value={genders.preferNS}
          >
            Prefer not to say
          </Radio>
        </div>
      </RadioGroup>
      <div class="inputBx">
        <span>Address</span>
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={onInputChange}
        />
      </div>

      <div class="inputBx">
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={onInputChange}
        />
      </div>
      <div class="inputBx">
        <span> Confirm Password</span>
        <input type="password" name="" />
      </div>

      <button
        className={`registerBtn ${isFormSubmitting ? "disabled" : ""}`}
        disabled={isFormSubmitting}
        onClick={userRegister}
      >
        {isFormSubmitting ? "..." : "Register"}
      </button>
      <div class="inputBx">
        <p className="haveAccount">
          Already have an account ?<Link to="/login">Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegistration;
