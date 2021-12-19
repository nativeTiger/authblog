import React, { useState } from "react";
import ProjectForm from "../form/ProjectForm";
import { connect } from "react-redux";
import { createProject } from "../../redux/project/projectActions";
const ProjectCreate = ({ createProject }) => {
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
    createProject(state);
  };
  return (
    <ProjectForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(null, mapDispatchToProps)(ProjectCreate);
