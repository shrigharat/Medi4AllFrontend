import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InstituteRegistration.scss";
import {
  initialFormValues,
  specialities,
  insurance,
  handleChange,
  validateValues,
} from "./instituteFormValues";
import { useToast } from "@chakra-ui/toast";
import axiosInstance from "../../api/axiosInstance";

const InstituteRegistration = () => {
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

  const instituteRegister = async () => {
    setFormSubmitting(true);
    if (validateValues(formValues, toast)) {
      try {
        const response = await axiosInstance.put("/institutions/", formValues);
        setFormSubmitting(false);
        toast({
          title: "Registration successful",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "solid",
          position: "top-right",
          colorScheme: "med"
        });
        setFormValues(initialFormValues);
      } catch (e) {
        console.log("Couldn't register insititue: ");
        setFormSubmitting(false);
      }
    }
  };

  return (
    <div className="instituteRegister">
      <div class="inputBx">
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={onInputChange}
        />
      </div>
      <div class="inputBx">
        <span>Registration Number</span>
        <input
          type="phone"
          name="registration_no"
          value={formValues.registration_no}
          onChange={onInputChange}
        />
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

      <div class="inputBx">
        <span>Contact Number</span>
        <input
          type="phone"
          name="contact_no"
          value={formValues.contact_no}
          onChange={onInputChange}
        />
      </div>
      <div class="inputBx">
        <span>Helpline Number</span>
        <input
          type="phone"
          name="helpline_no"
          value={formValues.helpline_no}
          onChange={onInputChange}
        />
      </div>

      <div class="inputBx">
        <span>Medical Insurance</span>
        <CheckboxGroup
          colorScheme="med"
          _focus={{ outline: "none" }}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, medical_insurance: e }))
          }
        >
          <div className="availabilityWrapper">
            {insurance.map((ins, index) => (
              <Checkbox key={index + 12} value={ins}>
                {ins}
              </Checkbox>
            ))}
          </div>
        </CheckboxGroup>
      </div>

      <div class="inputBx">
        <span>Specialities</span>
        <CheckboxGroup
          colorScheme="med"
          _focus={{ outline: "none" }}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, specialities: e }))
          }
        >
          <div className="availabilityWrapper">
            {specialities.map((speciality, index) => (
              <Checkbox key={index + 10} value={speciality}>
                {speciality}
              </Checkbox>
            ))}
          </div>
        </CheckboxGroup>
      </div>

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
        <span>Postal code</span>
        <input
          type="text"
          name="postal_code"
          value={formValues.postal_code}
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
        <input
          type="password"
          name="confirm_password"
          value={formValues.confirm_password}
          onChange={onInputChange}
        />
      </div>

      <button
        className={`registerBtn ${isFormSubmitting ? "disabled" : ""}`}
        onClick={instituteRegister}
        disabled={isFormSubmitting}
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

export default InstituteRegistration;
