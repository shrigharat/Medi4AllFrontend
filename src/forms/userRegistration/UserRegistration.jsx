import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./UserRegistration.scss";

const UserRegistration = () => {
  const genders = {
    male: "male",
    female: "female",
    preferNS: "prefer not to say",
  };
  const [gender, setGender] = useState("");
  return (
    <form className="userRegister">
      <div class="inputBx">
        <span>Full Name</span>
        <input type="text" name="" />
      </div>
      <div class="inputBx">
        <span>Email Address</span>
        <input type="text" name="" />
      </div>
      <div className="inputRow">
        <div class="inputBx">
          <span>Contact Number</span>
          <input type="phone" name="" />
        </div>
        <div class="inputBx">
          <span>Date Of Birth</span>
          <input type="date" />
        </div>
      </div>

      <p className="selectGender">Select gender</p>
      <RadioGroup
        colorScheme="med"
        onChange={(e) => {
          setGender(e);
        }}
        value={gender}
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
        <input type="text" name="" />
      </div>

      <div class="inputBx">
        <span>Password</span>
        <input type="password" name="" />
      </div>
      <div class="inputBx">
        <span> Confirm Password</span>
        <input type="password" name="" />
      </div>

      <button className="registerBtn">Register</button>
      <div class="inputBx">
        <p className="haveAccount">
          Already have an account ?<Link to="/login">Login now</Link>
        </p>
      </div>
    </form>
  );
};

export default UserRegistration;
