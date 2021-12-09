import React, { Component } from "react";
import ProjectList from "./ProjectList";
import Notification from "./Notification";
class Dashboard extends Component {
  render() {
    return (
      <main className="main">
        <section className="home section" id="home">
          <div className="home__container container">
            <div className="home__content">
              <div className="home__projectlist">
                <h2 className="home__projectlist__title">Projects</h2>
                <ProjectList />
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

export default Dashboard;
