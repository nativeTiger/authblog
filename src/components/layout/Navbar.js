import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignedInLink /> : <SignedOutLink />;
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link className="nav__logo" to="/">
          Blog
        </Link>
        <div className="nav__menu" id="nav-menu">
          {links}
        </div>
      </nav>
    </header>
  );
};
const mapStatesToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStatesToProps)(Navbar);
