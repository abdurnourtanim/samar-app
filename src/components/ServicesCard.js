import React from "react";
import classes from "../style/Services.module.css";

const ServicesCard = ({ img, title, text, style }) => {
  return (
    <div className={classes.services__card}>
      <div className={`${classes.services__card__icon} ${style}`}>
        <img src={img} alt={title} />
      </div>
      <div className={classes.services__card__content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
