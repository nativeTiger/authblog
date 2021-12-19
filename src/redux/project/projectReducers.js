import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS } from "./projectTypes";
import { initialProjects } from "../initialStates";
const projectReducer = (state = initialProjects.projects, action) => {
  switch (action.type) {
    case CREATE_PROJECT_SUCCESS:
      console.log("project created", action.payload);
      return state;
    case CREATE_PROJECT_FAILURE:
      console.log("error", action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
