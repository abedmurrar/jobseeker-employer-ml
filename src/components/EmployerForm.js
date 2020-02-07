import React, { Component, Fragment } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import Job from "./Job";

export class EmployerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employerName: "",
      jobTitle: "",
      jobDescription: "",
      msg: "",
      jobs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { employerName, jobTitle, jobDescription } = this.state;
    axios
      .post("http://localhost:5000/jobs", {
        employerName,
        jobTitle,
        jobDescription
      })
      .then(res =>
        this.setState({ msg: "Successfully submitted", jobs: res.data })
      )
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
        {this.state.jobs.map(job => (
          <Job job={job} />
        ))}
        <Typography variant="h3">Upload job</Typography>
        <Typography variant="body1">{this.state.msg}</Typography>
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column", width: "50%" }}
        >
          <TextField
            name="employerName"
            onChange={this.handleInputChange}
            label="Employer Name"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="jobTitle"
            onChange={this.handleInputChange}
            label="Job Title"
            variant="filled"
            style={{ padding: "5px" }}
          />
          <TextField
            name="jobDescription"
            onChange={this.handleInputChange}
            label="Job Description"
            multiline
            rows="6"
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

export default EmployerForm;
