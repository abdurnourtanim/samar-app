import React from "react";
import classes from "../style/Contact.module.css";

const InputGroup = ({ icon, ...rest }) => {
  return (
    <div className={classes.input__group}>
      <div className={classes.input__icons}>
        <i className={icon}></i>
      </div>
      <input {...rest} required />
    </div>
  );
};

export default InputGroup;
