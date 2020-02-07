import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

export class Job extends Component {
  render() {
    const {
      job: { employerName, jobTitle, jobDescription }
    } = this.props;
    return (
      <Paper>
        <Typography variant="h3">{jobTitle}</Typography>
        <ul>
          <li>Employer Name : {employerName}</li>
          <li>Job Description : {jobDescription}</li>s{" "}
        </ul>
      </Paper>
    );
  }
}

export default Job;
