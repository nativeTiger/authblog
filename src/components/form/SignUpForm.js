import React from "react";
import Input from "./input/Input";
import SubmitInput from "./input/SubmitInput";

const SignUpForm = ({
  email,
  password,
  firstName,
  lastName,
  onChange,
  onSubmit,
}) => {
  return (
    <div className="form__card">
      <form className="form__details" onSubmit={onSubmit}>
        <h2 className="form__title">SignUp</h2>
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
        <Input
          label="LastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={onChange}
        />
        <Input
          label="FirstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={onChange}
        />
        <SubmitInput value="SignUp" />
      </form>
    </div>
  );
};
export default SignUpForm;
