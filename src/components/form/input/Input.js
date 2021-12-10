import React from "react";

const Input = ({ label, name, onChange, value, type }) => {
  return (
    <div className="form__group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form__group__control"
        placeholder="a"
      />
      <label htmlFor={name} className="form__group__label">
        {label}
      </label>
    </div>
  );
};
export default Input;
