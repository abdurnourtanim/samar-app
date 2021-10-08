import React from "react";
import img1 from "../assets/img/icon/services-1.png";
import img2 from "../assets/img/icon/services-2.png";
import img3 from "../assets/img/icon/services-3.png";
import classes from "../style/Services.module.css";
import SectionTitle from "./SectionTitle";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <section id="services" className={classes.services__content}>
      <div className="container">
        <div className={classes.services__heading}>
          <SectionTitle
            subTitle={classes.sub__title}
            mainTitle={classes.main__title}
            titleText="Services"
          />
        </div>
        <div className={classes.services__card__container}>
          <ServicesCard
            style={classes.yellow}
            img={img1}
            title="Strategy & Research"
            text="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
          euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
          <ServicesCard
            style={classes.red}
            img={img2}
            title="Web development"
            text="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
          euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
          <ServicesCard
            style={classes.green}
            img={img3}
            title="web solution"
            text="Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien
          euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
