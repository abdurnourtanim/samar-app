import React from "react";
import img4 from "../assets/img/icon/confetti.png";
import img2 from "../assets/img/icon/services-1.png";
import img1 from "../assets/img/icon/smile.png";
import img3 from "../assets/img/icon/startup.png";
import classes from "../style/Counter.module.css";
import CounterCard from "./CounterCard";

const Counter = () => {
  return (
    <section className={classes.about__counter}>
      <div className="container">
        <div className={classes.counter__wrapper}>
          <CounterCard
            img={img1}
            number="9875"
            title="Satisfied Clients"
            style1="green"
          />
          <CounterCard
            img={img2}
            number="8765"
            title="Project Completed"
            style1="yellow"
            style2={classes.second}
          />
          <CounterCard
            img={img3}
            number="7894"
            title="Project Lunched"
            style1="blue"
          />
          <CounterCard
            img={img4}
            number="65"
            title="Years Completed"
            style1="blue"
            style2={classes.last}
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;
