import React from "react";
import MyInfo from "./MyInfo";
import MakeCallForm from "./MakeCallForm";
import classes from "./Options.module.scss";

const Options = ({ children, onOpen }) => {
  return (
    <div className={classes.callingOptions}>
      <MyInfo />
      <MakeCallForm onOpen={onOpen} />
    </div>
  );
};

export default Options;
