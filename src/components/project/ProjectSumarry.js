import React from "react";
import { Link } from "react-router-dom";

const ProjectSumarry = () => {
  return (
    <div className="project">
      <h3 className="project__title">Hello</h3>
      <p className="project__author">Posted by kiran</p>
      <p className="project__date">1345</p>
      <Link to="/project/:id">
        <span className="project__button">View</span>
      </Link>
    </div>
  );
};
export default ProjectSumarry;
