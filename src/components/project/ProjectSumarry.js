import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectSumarry = ({ project }) => {
  const { title, authorLastName, authorFirstName, createdAt, id } = project;
  return (
    <div className="project">
      <h3 className="project__title">{title}</h3>
      <p className="project__author">
        Posted by {authorFirstName} {authorLastName}
      </p>
      <p className="project__date">{moment(createdAt.toDate()).calendar()}</p>
      <Link to={`/project/${id}`}>
        <span className="project__button">View</span>
      </Link>
    </div>
  );
};
export default ProjectSumarry;
