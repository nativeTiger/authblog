import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
const ProjectDetails = ({ project }) => {
  if (project) {
    const { authorFirstName, authorLastName, content, title, createdAt } =
      project;
    return (
      <section className="project__details container" id="project">
        <h2 className="project__title">{title}</h2>
        <p className="project__content">{content}</p>
        <p className="project__author">
          Posted by {authorFirstName} {authorLastName}
        </p>
        <p className="project__date" key={createdAt.seconds}>
          {createdAt.seconds}
        </p>
        <Link to="/">
          <span className="project__button">Go Back</span>
        </Link>
      </section>
    );
  } else {
    return <h1 className="loading__project"> Loading Projects...</h1>;
  }
};
const mapStatesToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};
export default compose(
  connect(mapStatesToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);
