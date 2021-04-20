import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
// import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFBA60",
    width: "100%",
  },
  gridLink: {
    backgroundColor: "#FFBA60",
    textAlign: "center",
  },
});

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      {/* <Hidden mdDown> */}
      <Grid container justify="center" spacing={2}>
        <Grid
          lg={4}
          item
          component={Link}
          to="/footerone"
          onClick={() => {
            props.setValue(0);
            props.setSelectedIndex(0);
          }}
          className={classes.gridLink}
        >
          <img src={logo} alt="logo" width={85} height={85} />
          <h3>Footer One</h3>
        </Grid>
        <Grid
          lg={4}
          item
          component={Link}
          to="/footertwo"
          onClick={() => {
            props.setValue(1);
            props.setSelectedIndex(1);
          }}
          className={classes.gridLink}
        >
          <img src={logo} alt="logo" width={85} height={85} />
          <h3>Footer Two</h3>
        </Grid>
        <Grid
          lg={4}
          item
          component={Link}
          to="/footerthree"
          onClick={() => {
            props.setValue(2);
            props.setSelectedIndex(2);
          }}
          className={classes.gridLink}
        >
          <img src={logo} alt="logo" width={85} height={85} />
          <h3>Footer Three</h3>
        </Grid>
      </Grid>
      {/* </Hidden> */}
    </footer>
  );
}
