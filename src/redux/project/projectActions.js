import { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS } from "./projectTypes";

const createProjectSuccess = (project) => {
  return {
    type: CREATE_PROJECT_SUCCESS,
    payload: project,
  };
};

const createProjectFailure = (error) => {
  return {
    type: CREATE_PROJECT_FAILURE,
    payload: error,
  };
};
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const { firstName, lastName } = profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => dispatch(createProjectSuccess(project)))
      .catch((error) => dispatch(createProjectFailure(error)));
  };
};
