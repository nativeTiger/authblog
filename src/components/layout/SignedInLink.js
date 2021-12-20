import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/auth/authActions";
const SignedInLink = ({ signOut }) => {
  return (
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/create" className="nav__link">
          Create Project
        </Link>
      </li>
      <li className="nav__item">
        <a onClick={signOut} className="nav__link">
          SignOut
        </a>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLink);
