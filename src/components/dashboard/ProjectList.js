import React from "react";
import ProjectSumarry from "../project/ProjectSumarry";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects &&
        projects.map((project) => (
          <ProjectSumarry project={project} key={project.id} />
        ))}
    </div>
  );
};

export default ProjectList;
