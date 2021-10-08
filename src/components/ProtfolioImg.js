import React from "react";
import classes from "../style/Protfolio.module.css";

const ProtfolioImg = ({ img }) => {
  return (
    <div className={classes.protfolio__img}>
      <a href="/">
        <img src={img} alt="protfolio__image" />
      </a>
    </div>
  );
};

export default ProtfolioImg;
