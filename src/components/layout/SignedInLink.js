import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/auth/authActions";

const SignedInLink = ({ profile, signOut }) => {
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
      {/* <li className="nav__item">
        <a href="" className="nav__link">
          {profile.initials}
        </a>
      </li> */}
    </ul>
  );
};
const mapStatesToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStatesToProps, mapDispatchToProps)(SignedInLink);
