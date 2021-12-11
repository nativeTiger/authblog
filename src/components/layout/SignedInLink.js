import React from "react";
import { Link } from "react-router-dom";
const SignedInLink = () => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/create" className="nav__link">
          Create Project
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/signin" className="nav__link">
          SignOut
        </Link>
      </li>
    </ul>
  );
};
export default SignedInLink;
