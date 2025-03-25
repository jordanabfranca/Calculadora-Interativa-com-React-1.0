import React from "react";

import logo1 from "../assets/react.svg";
import logo from "../assets/JF.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo w-10 h-10">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;
