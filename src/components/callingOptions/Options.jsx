import React from "react";
import MyInfo from "./MyInfo";
import MakeCallForm from "./MakeCallForm";
import classes from "./Options.module.scss";

const Options = ({ children }) => {
  return (
    <div className={classes.callingOptions}>
      <MyInfo />
      <MakeCallForm />
    </div>
  );
};

export default Options;
