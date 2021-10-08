import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import classes from "../style/Navbar.module.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navSticky, setNavSticky] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`${classes.navbar} ${
          navSticky ? `${classes.navbar__sticky}` : `${classes.navbar}`
        }`}
      >
        <div className="container">
          <div className={classes.logo__and__menu}>
            <a href="/" className={classes.logo}>
              <img src={logo} alt="brand__logo" />
            </a>
            <div className={classes.nav__list}>
              <ul
                className={`${classes.nav__items} ${
                  toggle
                    ? `${classes.nav__items__show}`
                    : `${classes.nav__items}`
                }`}
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">pages</a>
                </li>
                <li>
                  <a href="/">services</a>
                </li>
                <li>
                  <a href="/">blog</a>
                </li>
                <li className={classes.last__mobile__menu}>
                  <a href="/">contact us</a>
                </li>
              </ul>
              <ul className={classes.nav__quote}>
                <li className={classes.quote}>
                  <a href="/">
                    <i className="fas fa-angle-right"></i>
                    get a quote
                  </a>
                </li>
                <li className={classes.mobile__bar} onClick={clickHandler}>
                  <i className={`${classes.bar} fas fa-bars`}></i>
                  <i className={`${classes.close} hide fas fa-times`}></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
