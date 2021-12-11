import { Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ProjectDetails from "./components/project/ProjectDetails";
import ProjectCreate from "./components/project/ProjectCreate";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/project/:slug" component={ProjectDetails} />
        <Route path="/create" component={ProjectCreate} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
