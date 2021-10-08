import React from "react";

const SectionTitle = ({ subTitle, mainTitle, titleText }) => {
  return (
    <>
      <h6 className={`sub__title ${subTitle}`}> {titleText} </h6>
      <p className={`main__title ${mainTitle}`}>
        Provide Awesome Service To You
      </p>
    </>
  );
};

export default SectionTitle;
