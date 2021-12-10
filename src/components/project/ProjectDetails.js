import React from "react";
import { Link } from "react-router-dom";
const ProjectDetails = (props) => {
  const slug = props.match.params.slug;
  return (
    <section className="project__details container" id="project">
      <h2 className="project__title">Title - {slug}</h2>
      <p className="project__content">content</p>
      <p className="project__author">Posted by kiran</p>p
      <p className="project__date">1234</p>
      <Link to="/">
        <span className="project__button">Go Back</span>
      </Link>
    </section>
  );
};

export default ProjectDetails;
