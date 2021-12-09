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
        <Link to="/signup" className="nav__link">
          SignOut
        </Link>
      </li>
      <li className="nav__item">
        <button className="nav__btn">Hel</button>
      </li>
    </ul>
  );
};
export default SignedInLink;
