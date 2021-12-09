import React from "react";
import { Link } from "react-router-dom";

const SignedOutLink = () => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/signin" className="nav__link">
          SignIn
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/signup" className="nav__link">
          SignUp
        </Link>
      </li>
    </ul>
  );
};
export default SignedOutLink;
