import React, { useState } from "react";
import SignInForm from "../form/SignInForm";
import { connect } from "react-redux";
import { signIn } from "../../redux/auth/authActions";
const SignIn = ({ signIn, authError, history }) => {
  const initialStates = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(initialStates);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(state);
  };
  return (
    <SignInForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
      authError={authError}
    />
  );
};
const mapStatesToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (users) => dispatch(signIn(users, ownProps)),
  };
};
export default connect(mapStatesToProps, mapDispatchToProps)(SignIn);
