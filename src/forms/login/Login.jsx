import React, { useState } from "react";
import "./Login.scss";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const userTypes = {
  patient: "patient",
  doctor: "doctor",
  institute: "institute",
};

const LoginForm = () => {
  const [userType, setUserType] = useState();
  return (
    <section>
      <div class="contentBx">
        <div class="formBx">
          <h2>Login</h2>
          <form>
            <span class="auth-title">Select identitification type</span>
            <RadioGroup
              colorScheme="med"
              onChange={setUserType}
              value={userType}
            >
              <div className="radioContainer">
                <Radio size="md" value={userTypes.patient}>User</Radio>
                <Radio size="md" value={userTypes.doctor}>Doctor</Radio>
                <Radio size="md" value={userTypes.institute}>Institute</Radio>
              </div>
            </RadioGroup>
            <div class="inputBx">
              <span>Email Address or Username</span>
              <input type="text" name="" />
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input type="password" name="" />
            </div>
            <div class="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div class="inputBx">
              <input type="submit" value="Log in" name="" />
            </div>
            <div class="inputBx">
              <p className="noAccount">
                Don't have an account ?<a href="#">Register now</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
