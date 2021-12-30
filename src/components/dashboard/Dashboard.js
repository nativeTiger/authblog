import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Notification from "./Notification";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
class Dashboard extends Component {
  render() {
    const { projects, authId } = this.props;
    if (!authId) return <Redirect to="/signin" />;
    return (
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container">
            <div className="home__content">
              <div className="home__projectlist">
                <h2 className="home__projectlist__title">Projects</h2>
                <ProjectList projects={projects} />
              </div>
              <div className="home__notification">
                <h2 className="home__notification__title">Notifications</h2>
                <Notification />
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
const mapStatesToProps = ({ firestore, firebase }) => {
  return {
    projects: firestore.ordered.projects,
    authId: firebase.auth.uid,
  };
};
export default compose(
  connect(mapStatesToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(Dashboard);
