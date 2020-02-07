import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          In Place
        </Typography>
        <Button component={Link} to="/jobseeker">
          Job Seeker
        </Button>
        <Button component={Link} to="/employer">
          Employer
        </Button>
        <Button>About</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
