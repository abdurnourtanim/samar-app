import React from "react";
import img1 from "../assets/img/banner-bg-1.png";
import img2 from "../assets/img/banner-bg-2.png";
import img5 from "../assets/img/banner-bg.png";
import img3 from "../assets/img/illustration-1.png";
import img4 from "../assets/img/illustration-2.png";
import classes from "../style/Banner.module.css";

const Banner = () => {
  return (
    <>
      <section
        id="home"
        className={classes.banner__content}
        style={{ background: `url(${img5})` }}
      >
        <div className="container">
          <div className={classes.banner__inner}>
            <div className={classes.img1}>
              <img src={img1} alt="banner__image" />
            </div>
            <div className={classes.img2}>
              <img src={img2} alt="banner__image" />
            </div>
            <div className={classes.left__part}>
              <h6>WE CREATE IDEAS</h6>
              <h1>
                Build Stunning <span>Website</span> With Slack Agency
              </h1>
              <p>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus.
              </p>
              <a href="/" className={`btn__link ${classes.btn__banner}`}>
                <i className="fas fa-angle-right"></i>
                Learn more
              </a>
            </div>
            <div className={classes.right__part}>
              <div className={classes.banner__illustration}>
                <img
                  className={classes.banner__illustration__img}
                  src={img3}
                  alt="banner__illustration"
                />
                <img
                  className={classes.banner__illustration__img2}
                  src={img4}
                  alt="banner__illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
