import React, { Component, Fragment } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import CV from "./CV";

class JobSeekerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidateName: "",
      skills: "",
      education: "",
      expertises: "",
      languages: "",
      msg: "",
      cvs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      candidateName,
      skills,
      education,
      expertises,
      languages
    } = this.state;
    axios
      .post("http://localhost:5000/cvs", {
        candidateName,
        skills,
        education,
        expertises,
        languages
      })
      .then(res => {
        this.setState({ msg: "Successfully submitted", cvs: res.data });
      })
      .catch(err =>
        this.setState({
          msg: "Error occurred, could not be submitted" + "\n" + err.message
        })
      );
  }

  handleInputChange(event) {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.cvs.map(cv => (
          <CV cv={cv} />
        ))}
        <Typography variant="h3">Upload CV</Typography>
        <Typography variant="body1">{this.state.msg}</Typography>
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          <TextField
            name="candidateName"
            onChange={this.handleInputChange}
            label="Candidate Name"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="skills"
            onChange={this.handleInputChange}
            label="Skills"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="education"
            onChange={this.handleInputChange}
            label="Education"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="expertises"
            onChange={this.handleInputChange}
            label="Expertises"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="languages"
            onChange={this.handleInputChange}
            label="Languages"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <Button onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default JobSeekerForm;
