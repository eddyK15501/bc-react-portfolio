/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ContactLinks = ({ link, title, children }) => {
  return (
    <div className="d-flex align-items-center link-container">
      <a href={`${link}`}>
        {children}
        {title}
      </a>
    </div>
  );
};

export default ContactLinks;
