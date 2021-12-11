import React, { useState } from "react";
import SignUpForm from "../form/SignUpForm";

const SignUp = () => {
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
    console.log(state);
  };
  return (
    <SignUpForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
