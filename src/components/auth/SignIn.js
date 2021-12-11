import React, { useState } from "react";
import SignInForm from "../form/SignInForm";

const SignIn = () => {
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
    console.log(state);
  };
  return (
    <SignInForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
export default SignIn;
