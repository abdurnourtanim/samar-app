import React from "react";
import img4 from "../assets/img/feture-img.png";
import img2 from "../assets/img/icon/analysis.png";
import img1 from "../assets/img/icon/idea.png";
import classes from "../style/Fetures.module.css";
import FeturesCard from "./FeturesCard";
import SectionTitle from "./SectionTitle";

const Fetures = () => {
  return (
    <section id="fetures" className={classes.fetures__content}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.fetures__content__inner}>
            <div className={classes.heading}>
              <SectionTitle
                subTitle={classes.sub__title}
                mainTitle={classes.main__tilte}
                title="Fetures"
                text="Our Working Process To Help Your Boost Your Business"
              />
            </div>
            <div className={classes.fetures__details}>
              <FeturesCard
                img={img1}
                title="Idea & Analysis Gathering"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
                icon={classes.icon__one}
              />
              <FeturesCard
                img={img2}
                title="Designing & Developing"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua."
                icon={classes.icon__two}
                classname={classes.two}
              />
              <FeturesCard
                img={img2}
                title="Idea & Analysis Gathering"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua."
                icon={classes.icon__three}
              />
            </div>
          </div>
          <div className={classes.fetures__illustration}>
            <img src={img4} alt="fetures__img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetures;
