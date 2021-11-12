import { Button } from "@chakra-ui/button";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DoctorRegistration.scss";

const DoctorRegistration = () => {
  const genders = {
    male: "male",
    female: "female",
    preferNS: "prefer not to say",
  };
  const [gender, setGender] = useState("");

  return (
    <form className="doctorRegister">
      <div class="inputBx">
        <span>Name</span>
        <input type="text" name="" />
      </div>

      <div class="inputBx">
        <span>Email Address</span>
        <input type="text" name="" />
      </div>

      <div class="inputBx">
        <span>Contact Number</span>
        <input type="phone" name="" />
      </div>
      <div class="inputBx">
        <span>Date Of Birth</span>
        <input type="date" name="" />
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
        <span>Degree</span>
        <div class="custom_select">
          <Menu>
            <MenuButton as={Button} 
            w="100%"
            textAlign="left"
            // rightIcon={<ChevronDownIcon />}
            >
              Select your highest achieved degree
            </MenuButton>
            <MenuList>
              <MenuItem>MBBS</MenuItem>
              <MenuItem>BDS</MenuItem>
              <MenuItem>MD</MenuItem>
              <MenuItem>MS</MenuItem>
              <MenuItem>DM</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <div class="inputBx">
        <span>Speciality</span>
        <input type="text" name="" />
      </div>

      <div class="inputBx">
        <span>Years Of Experience</span>
        <input type="phone" name="" />
      </div>

      <div class="inputBx">
        <span>Availability</span>
        <form>
          <CheckboxGroup
            colorScheme="med"
            defaultValue={["Monday", "Tuesday"]}
            _focus={{ outline: "none" }}
          >
            <div className="availabilityWrapper">
              <Checkbox value="Monday">Monday</Checkbox>
              <Checkbox value="Tuesday">Tuesday</Checkbox>
              <Checkbox value="Wednesday">Wednesday</Checkbox>
              <Checkbox value="Thursday">Thursday</Checkbox>
              <Checkbox value="Friday">Friday</Checkbox>
              <Checkbox value="Saturday">Saturday</Checkbox>
              <Checkbox value="Sunday">Sunday</Checkbox>
            </div>
          </CheckboxGroup>
        </form>
      </div>

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

export default DoctorRegistration;
