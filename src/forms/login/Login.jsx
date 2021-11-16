import React, { useState } from "react";
import "./Login.scss";
import { Radio, RadioGroup, Stack, useToast } from "@chakra-ui/react";
import axiosInstance from "../../api/axiosInstance";
import { login } from "../../redux/reducers/authSlice";
import { useDispatch } from "react-redux";
import {Link, useHistory} from "react-router-dom";

const userTypes = {
  patient: "patient",
  doctor: "doctor",
  institute: "institute",
};

const LoginForm = () => {
  const [userType, setUserType] = useState(userTypes.patient);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [isFormSubmitting, setFormSubmitting] = useState(false);
  const history = useHistory();
  const toast = useToast();
  const dispatch = useDispatch();

  const userLogin = async (e) => {
    e.preventDefault();
    if (formValues.email === "") {
      toast({
        title: "Please enter email or username!",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "top-right",
      });
      return;
    }
    if (formValues.password === "") {
      toast({
        title: "Please enter password!",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "top-right",
      });
      return;
    }
    setFormSubmitting(true);
    try {
      const endpoint =
        userType === userTypes.patient
          ? "/users"
          : userType === userTypes.doctor
          ? "/doctors"
          : "/institutions";
      const response = await axiosInstance.post(
        endpoint + "/login",
        formValues
      );
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "top-right",
        colorScheme: "med"
      });
      setFormSubmitting(false);
      dispatch(login({...response.data, userType}));
      history.push("/dashboard");
      setFormValues({ email: "", password: "" });
    } catch (e) {
      toast({
        title: e.response.data.error,
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "top-right",
      });
      setFormSubmitting(false);
    }
  };

  return (
    <section>
      <div class="contentBx">
        <div class="formBx">
          <h2>Login</h2>
          <form>
            <div class="auth-title">Select identitification type</div>
            <RadioGroup
              colorScheme="med"
              onChange={(e) => {
                setUserType(e);
              }}
              value={userType}
            >
              <div className="radioContainer">
                <Radio
                  _focus={{ outline: "none" }}
                  size="md"
                  value={userTypes.patient}
                >
                  User
                </Radio>
                <Radio
                  _focus={{ outline: "none" }}
                  size="md"
                  value={userTypes.doctor}
                >
                  Doctor
                </Radio>
                <Radio
                  _focus={{ outline: "none" }}
                  size="md"
                  value={userTypes.institute}
                >
                  Institute
                </Radio>
              </div>
            </RadioGroup>
            <div class="inputBx">
              <span>Email Address or Username</span>
              <input
                required
                type="text"
                name=""
                value={formValues.email}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div class="inputBx">
              <span>Password</span>
              <input
                required
                type="password"
                name=""
                value={formValues.password}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            <div class="pass">
              <a href="#">Forgot password?</a>
            </div>
            <button className="loginBtn" onClick={(e) => userLogin(e)}>
              {isFormSubmitting ? "..." : "Login"}
            </button>
            <div class="inputBx">
              <p className="noAccount">
                Don't have an account ?
                <Link to="/registration">Register now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
