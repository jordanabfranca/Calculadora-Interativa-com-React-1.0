import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/about" className={activeStyleCallback}>
        {" "}
        About{" "}
      </NavLink>
      <NavLink to="/contact" className={activeStyleCallback}>
        {" "}
        Contat
      </NavLink>
      <NavLink to="/blog" className={activeStyleCallback}>
        Blog
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toglleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden ">
        <div className="flex space-x-20 hidden justify-end md:flex ">
          <NavLinks />
        </div>
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}> {isOpen ? <X /> : <Menu />} </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col item-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};
export default Nav;
