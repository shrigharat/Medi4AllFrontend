import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./DoctorRegistration.scss";
import {
  genders,
  initialFormValues,
  days,
  handleChange,
  degrees,
  validateValues,
} from "./doctorFormValues";
import { Select } from "@chakra-ui/select";
import axiosInstance from "../../api/axiosInstance";
import { useToast } from "@chakra-ui/toast";

const DoctorRegistration = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [institutions, setInstitutions] = useState([]);
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const toast = useToast();
  const history = useHistory();
  console.log("Form values: ", formValues);

  useEffect(() => {
    axiosInstance.get("/institutions/all").then(response => {
      setInstitutions(response.data)
    })
  }, []);

  const onInputChange = (e) => {
    setFormValues((prev) => {
      const newValues = { ...prev };
      newValues[e.target.name] = e.target.value;
      return newValues;
    });
  };

  const doctorRegister = async () => {
    const age =
      new Date().getFullYear() - new Date(formValues.dob).getFullYear();
    console.log("Age: ", age);
    if (validateValues(formValues, toast)) {
      setFormSubmitting(true);
      try {
        const response = await axiosInstance.put("/doctors", {
          ...formValues,
          age,
        });
        toast({
          title: "Registration successful",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "solid",
          position: "top-right",
          colorScheme: "med",
        });
        setFormSubmitting(false);
        history.push("/login");
      } catch (e) {
        console.log("Could not register doctor: ", e);
        setFormSubmitting(false);
      }
    }
  };

  return (
    <div className="doctorRegister">
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
      <p className="selectGender">Select gender</p>
      <RadioGroup
        colorScheme="med"
        onChange={(e) => {
          setFormValues((prev) => ({
            ...prev,
            gender: e,
          }));
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
        <span>Degree</span>
        <div class="custom_select">
          <Select
            colorScheme="med"
            placeholder="Select option"
            _focus={{ outline: "none" }}
            border="1px solid #424242"
            onChange={(e) => {
              setFormValues((prev) => ({ ...prev, degree: e.target.value }));
            }}
          >
            {degrees.map((deg) => (
              <option value={deg}>{deg}</option>
            ))}
          </Select>
        </div>
      </div>

      <div class="inputBx">
        <span>Speciality</span>
        <input
          type="text"
          name="speciality"
          value={formValues.speciality}
          onChange={onInputChange}
        />
      </div>

      <div class="inputBx">
        <span>Select associated institution</span>
        <Select
          _focus={{ outline: "none" }}
          border="1px solid #212121 !important"
          placeholder="Select institution"
          value={formValues.institute_id}
          name="institute_id"
          onChange={onInputChange}
        >
          {institutions.map((inst) => (
            <option value={inst._id}>{inst.name}</option>
          ))}
        </Select>
      </div>

      <div class="inputBx">
        <span>Years Of Experience</span>
        <input
          type="phone"
          name="years_of_experience"
          value={formValues.years_of_experience}
          onChange={onInputChange}
        />
      </div>

      <div class="inputBx">
        <span>Availability</span>
        <CheckboxGroup colorScheme="med">
          <div className="availabilityWrapper">
            {days.map((day, index) => {
              return (
                <Checkbox
                  value={day}
                  onChange={(e) => handleChange(e, setFormValues)}
                >
                  {day}
                </Checkbox>
              );
            })}
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
        onClick={doctorRegister}
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

export default DoctorRegistration;
