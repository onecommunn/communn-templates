import React from "react";

const Header = ({ text, description }) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Header;
