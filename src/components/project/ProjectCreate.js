import React, { useState } from "react";
import ProjectForm from "../form/ProjectForm";
const ProjectCreate = () => {
  const initialStates = {
    title: "",
    content: "",
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
    <ProjectForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
export default ProjectCreate;
