import React, { Component, Fragment } from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import JobSeekerList from "./JobSeekerList";

class JobSeeker extends Component {
  render() {
    return (
      <Fragment>
        <Grid
          item
          xs={2}
          sm={2}
          md={1}
          style={{ borderRight: "2px solid grey" }}
        >
          <Button component={Link} to="/uploadjob">
            + Upload
          </Button>
        </Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={11}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <JobSeekerList />
        </Grid>
      </Fragment>
    );
  }
}

export default JobSeeker;
