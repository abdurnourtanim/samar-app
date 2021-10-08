import React from "react";
import img1 from "../assets/img/about-img.png";
import img2 from "../assets/img/sign.png";
import classes from "../style/About.module.css";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section id="about" className={classes.about__content}>
      <div className="container">
        <div className={classes.wrapper}>
          <div className={classes.about__illustration}>
            <img src={img1} alt="about_us" />
          </div>
          <div className={classes.about__content__inner}>
            <div className={classes.about__heading}>
              <SectionTitle
                subTitle={classes.sub__title}
                mainTitle={classes.main__title}
                title="About Us"
                text="How We Can Help You Achieve Your Business Goal"
              />
            </div>
            <p className={classes.about__p1}>
              Integer pretium molestie nisl, non blandit lectus suscipit in.
              Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt
              consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat,
              tortor velit suscipit orci, sed consectetur ante eros id urna.
              Mauris luctus nulla ut pharetra tempor.
            </p>
            <p>
              Mauris egestas eleifend sapien eu malesuada. Phasellus at metus
              eget sapien tristique accumsan non sit amet augue.
            </p>
            <img src={img2} className={classes.about__sign} alt="" />
            <h4 className={classes.ceo}>CEO Jhone Doe</h4>
            <a href="/" className={`btn__link ${classes.btn__about}`}>
              <i className="fas fa-angle-right"></i>
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
