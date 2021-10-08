import React from "react";
import classes from "../style/Fetures.module.css";

const FeturesCard = ({ img, title, text, icon, classname }) => {
  return (
    <div className={`${classes.fetures__details__box} ${classname}`}>
      <div className={`${classes.icon} ${icon}`}>
        <img src={img} alt="idea" />
      </div>
      <div className={classes.fetures__details__content}>
        <h4 className={classes.mini__title}>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeturesCard;
