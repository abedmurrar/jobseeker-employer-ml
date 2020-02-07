import React, { Component, Fragment } from "react";
import { Container, withStyles, Grid, Button } from "@material-ui/core";
import Header from "./Header";

const styles = theme => ({
  containerRoot: {
    height: "100%"
  },
  gridContainerRoot: {
    height: "100%",
    display: "flex"
  }
});

class Main extends Component {
  //   componentDidMount() {}

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <Header />
        <Container maxWidth="100%" classes={{ root: classes.containerRoot }}>
          <Grid container classes={{ root: classes.gridContainerRoot }}>
            {children}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Main);
