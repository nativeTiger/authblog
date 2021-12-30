import React, { useState } from "react";
import SignUpForm from "../form/SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../../redux/auth/authActions";
const SignUp = ({ signUp }) => {
  const initialStates = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
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
    signUp(state);
  };

  return (
    <SignUpForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
