import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

export class CV extends Component {
  render() {
    const {
      cv: { candidateName, skills, education, expertises, languages }
    } = this.props;
    return (
      <Paper>
        <Typography variant="h3">{candidateName}</Typography>
        <ul>
          <li>Skills : {skills}</li>
          <li>Education : {education}</li>
          <li>Expertises : {expertises}</li>
          <li>Languages : {languages}</li>
        </ul>
      </Paper>
    );
  }
}

export default CV;
