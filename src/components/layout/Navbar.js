import React from "react";
import { Link } from "react-router-dom";
//import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link className="nav__logo" to="/">
          Blog
        </Link>
        <div className="nav__menu" id="nav-menu">
          <SignedOutLink />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
