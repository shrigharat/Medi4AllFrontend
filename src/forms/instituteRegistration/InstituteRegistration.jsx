import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import React from "react";
import { Link } from "react-router-dom";
import "./InstituteRegistration.scss";

const InstituteRegistration = () => {
  const [checkedItems, setCheckedItems] = React.useState([false, false]);

  return (
    <form className="instituteRegister">
      <div class="inputBx">
        <span>Name</span>
        <input type="text" name="" />
      </div>
      <div class="inputBx">
        <span>Registration Number</span>
        <input type="phone" name="" />
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
        <span>Helpline Number</span>
        <input type="phone" name="" />
      </div>
      <div class="inputBx">
        <span>Medical Insurance</span>

        <form>
          <CheckboxGroup
            colorScheme="med"
            defaultValue={["Monday", "Tuesday"]}
            _focus={{ outline: "none" }}
          >
            <div className="availabilityWrapper">
              <Checkbox value="All">All</Checkbox>
              <Checkbox value="Cashless">Cashless</Checkbox>
              <Checkbox value="Reimbursement">Reimbursement</Checkbox>
              <Checkbox value="TPA">TPA</Checkbox>
              <Checkbox value="Any Other+">Any Other+</Checkbox>
            </div>
          </CheckboxGroup>
        </form>
      </div>
      <div class="inputBx">
        <span>Specialities</span>
        <form>
          <CheckboxGroup
            colorScheme="med"
            defaultValue={["Monday", "Tuesday"]}
            _focus={{ outline: "none" }}
          >
            <div className="availabilityWrapper">
              <Checkbox value="Dietetics">Dietetics</Checkbox>
              <Checkbox value="Cardiology">Cardiology</Checkbox>
              <Checkbox value="Neurology">Neurology</Checkbox>
              <Checkbox value="Physiology">Physiology</Checkbox>
              <Checkbox value="Dental">Dental</Checkbox>
              <Checkbox value="Physiology">Any Other+</Checkbox>
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

export default InstituteRegistration;
