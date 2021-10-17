import React from "react";
import image from "../assets/img/contact-img.png";
import classes from "../style/Contact.module.css";
import InputGroup from "./InputGroup";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id="contact" class={classes.contact__content}>
      <div className="container">
        <div className={classes.content__wrapper}>
          <div className={classes.contact__content__wrapper}>
            <div className={classes.contact__heading}>
              <SectionTitle
                subTitle={classes.sub__title}
                mainTitle={classes.main__tilte}
                title="Contact us"
                text=" We Love To Help Great Companies To Enlarge Their Revenues."
              />
            </div>
            <div className={classes.contact__form}>
              <form>
                <div className={classes.input__group__wrapper}>
                  <InputGroup
                    icon="fas fa-user"
                    type="text"
                    placeholder="First Name"
                  />
                  <InputGroup
                    icon="fas fa-user"
                    type="text"
                    placeholder="Last Name"
                  />
                  <InputGroup
                    icon="far fa-envelope"
                    type="email"
                    placeholder="Email Address"
                  />
                  <InputGroup
                    icon="fas fa-phone-alt"
                    type="text"
                    placeholder="Phone No."
                  />
                  <InputGroup
                    icon="far fa-file-alt"
                    type="text"
                    placeholder="Project Title"
                  />

                  <div className={classes.input__group}>
                    <div className={classes.input__icons}>
                      <i className="fas fa-list-ul"></i>
                    </div>
                    <select required>
                      <option selected>Choose Service</option>
                      <option value="2">Web design</option>
                      <option value="3">Web development</option>
                      <option value="4">Mobile apps</option>
                      <option value="5">SEO</option>
                    </select>
                  </div>
                </div>

                <div
                  className={`${classes.input__group} ${classes.textarea__group}`}
                >
                  <div className={classes.input__icons}>
                    <i className="far fa-comment-alt"></i>
                  </div>
                  <textarea
                    rows="10"
                    cols="30"
                    placeholder="Message"
                  ></textarea>
                </div>

                <a href="/" className={`btn__link ${classes.form__btn}`}>
                  <i className="fas fa-angle-right"></i>
                  Submit now
                </a>
              </form>
            </div>
          </div>
          <div className={classes.contact__illustration}>
            <img src={image} alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
