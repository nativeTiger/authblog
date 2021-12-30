import React, { useState } from "react";
import ProjectForm from "../form/ProjectForm";
import { connect } from "react-redux";
import { createProject } from "../../redux/project/projectActions";
import { Redirect } from "react-router-dom";
const ProjectCreate = ({ auth, createProject, history }) => {
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
    history.push("/");
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <ProjectForm
      initialStates={initialStates}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};
const mapStatesToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};
export default connect(mapStatesToProps, mapDispatchToProps)(ProjectCreate);
