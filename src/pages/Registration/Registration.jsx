import React, { useState } from "react";
import classes from "./Registration.module.scss";
import UserRegistration from "../../forms/userRegistration/UserRegistration";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import DoctorRegistration from "../../forms/doctorRegistration/DoctorRegistration";
import InstituteRegistration from "../../forms/instituteRegistration/InstituteRegistration";
import { AnimatePresence, motion } from "framer-motion";
import userTypes from "../../utils/userTypes";

const Registration = () => {
  const [userType, setUserType] = useState(userTypes.patient);

  return (
    <section>
      <div class={classes.contentBx}>
        <div class={classes.formBx}>
          <h2>Registration</h2>
          <div className={classes.autTitle}>Select identitification type</div>
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
          <AnimatePresence>
            {userType === userTypes.patient && (
              <motion.div
                initial={{ transform: "translateX(-10px)" }}
                animate={{ transform: "translateX(0px)" }}
                exit={{ transform: "translateX(-550px)" }}
                transition={{ duration: 0.5 }}
              >
                <UserRegistration />
              </motion.div>
            )}
            {userType === userTypes.doctor && (
              <motion.div
                initial={{ transform: "translateX(-550px)" }}
                animate={{ transform: "translateX(0px)" }}
                exit={{ transform: "translateX(-550px)" }}
                transition={{ duration: 0.5 }}
              >
                <DoctorRegistration />
              </motion.div>
            )}
            {userType === userTypes.institute && (
              <motion.div
                initial={{ transform: "translateX(-550px)" }}
                animate={{ transform: "translateX(0px)" }}
                exit={{ transform: "translateX(-550px)" }}
                transition={{ duration: 0.5 }}
              >
                <InstituteRegistration />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Registration;
