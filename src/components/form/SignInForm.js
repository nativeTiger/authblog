import React from "react";
import Input from "./input/Input";
import SubmitInput from "./input/SubmitInput";

const SignInForm = ({ email, password, onChange, onSubmit }) => {
  return (
    <div className="form__card">
      <form className="form__details" onSubmit={onSubmit}>
        <h2 className="form__title">SignIn</h2>
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
        <SubmitInput value="SignIn" />
      </form>
    </div>
  );
};
export default SignInForm;
