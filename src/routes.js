import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Employer, EmployerForm, JobSeeker, JobSeekerForm } from "./components";

function App() {
  return (
    <Switch>
      <Route exact path="/jobseeker" component={JobSeeker} />
      <Route path="/uploadjob" component={JobSeekerForm} />
      <Route path="/employer" component={Employer} />
      <Route path="/uploadcv" component={EmployerForm} />
      <Redirect to="/jobseeker" />
    </Switch>
  );
}

export default App;
