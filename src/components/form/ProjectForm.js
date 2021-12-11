import React from "react";
import Input from "./input/Input";
import SubmitInput from "./input/SubmitInput";

const ProjectForm = ({ title, content, onChange, onSubmit }) => {
  return (
    <div className="form__card">
      <form className="form__details" onSubmit={onSubmit}>
        <h2 className="form__title">Create Project</h2>
        <Input
          label="Title"
          name="title"
          type="text"
          value={title}
          onChange={onChange}
        />
        <Input
          label="Content"
          name="content"
          type="text"
          value={content}
          onChange={onChange}
        />
        <SubmitInput value="Create" />
      </form>
    </div>
  );
};
export default ProjectForm;
