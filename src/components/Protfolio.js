import React from "react";
import img1 from "../assets/img/protfolio-1.png";
import img2 from "../assets/img/protfolio-2.png";
import img3 from "../assets/img/protfolio-3.png";
import img4 from "../assets/img/protfolio-4.png";
import img5 from "../assets/img/protfolio-5.png";
import img6 from "../assets/img/protfolio-6.png";
import classes from "../style/Protfolio.module.css";
import ProtfolioImg from "./ProtfolioImg";
import SectionTitle from "./SectionTitle";

const Protfolio = () => {
  return (
    <section id="protfolio" className={classes.protfolio__content}>
      <div className="container">
        <div className={classes.protfolio__heading}>
          <SectionTitle
            subTitle={classes.sub__title}
            mainTitle={classes.main__tilte}
            title="Project"
            text="Take A Look At Our Latest Portfolio"
          />
        </div>
        <div className={classes.protfolio__nav}>
          <ul className={classes.protfolio__nav__list}>
            <li>
              <a href="/" className={`${classes.active}`}>
                All
              </a>
            </li>
            <li>
              <a href="/">Web Design</a>
            </li>
            <li>
              <a href="/">Web development</a>
            </li>
            <li>
              <a href="/">mobile app</a>
            </li>
            <li>
              <a href="/">seo</a>
            </li>
          </ul>
        </div>
        <div className={classes.protfolio__content__details}>
          <ProtfolioImg img={img1} />
          <ProtfolioImg img={img2} />
          <ProtfolioImg img={img3} />
          <ProtfolioImg img={img4} />
          <ProtfolioImg img={img5} />
          <ProtfolioImg img={img6} />
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
