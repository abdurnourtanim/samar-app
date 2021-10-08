import React from "react";

const SectionTitle = ({ subTitle, mainTitle, title, text }) => {
  return (
    <>
      <h6 className={`sub__title ${subTitle}`}> {title} </h6>
      <p className={`main__title ${mainTitle}`}>{text}</p>
    </>
  );
};

export default SectionTitle;
