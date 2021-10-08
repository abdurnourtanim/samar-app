import React from "react";
import classes from "../style/Counter.module.css";

const CounterCard = ({ img, number, title, style1, style2 }) => {
  return (
    <div className={`${classes.counter} ${style2}`}>
      <div className={`${classes.icon} ${style1}`}>
        <img src={img} alt="counter__img" />
      </div>
      <h4>{title}</h4>
      <h2 className={classes.count__number}>{number}</h2>
    </div>
  );
};

export default CounterCard;
