import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginTop: "3rem",
  },
  MuiInput: {
    marginTop: ".8rem",
    underline: {
      "&:before": {
        borderBottom: "2px solid #0B72B9",
      },
      "&:hover:not($disabled):not($focused):not($error):before": {
        borderBottom: "2px solid #0B72B9",
      },
    },
  },
  MuiButton: {
    marginTop: "1rem",
    color: "#14142B",
    fontSize: ".90rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
    fontWeight: "700",
    border: "2px solid #0B72B9",
    borderRadius: ".5rem",
  },
}));

export default function Contact(props) {
  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const classes = useStyles();
  //   const theme = useTheme();

  const [name, setName] = useState("");
  // const [nameHelper, setNameHelper] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  // const [messageHelper, setMessageHelper] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /[a-z0-9-_.]+[a-z0-9-_.]+[@]+[a-z]+[.]+[a-z]+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^880+[1][3-9]+[0-9]{8}$/.test(event.target.value);

        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="row"
      style={{ textAlign: "center", marginTop: "0.8rem" }}
    >
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="h6">We are waiting</Typography>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={classes.MuiInput}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              error={emailHelper.length !== 0}
              onChange={onChange}
              helperText={emailHelper}
              className={classes.MuiInput}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              error={phoneHelper.length !== 0}
              onChange={onChange}
              helperText={phoneHelper}
              className={classes.MuiInput}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Message"
              id="message"
              value={message}
              multiline
              onChange={(event) => setMessage(event.target.value)}
              className={classes.MuiInput}
            ></TextField>
          </Grid>
          <Grid item style={{ marginTop: "1rem" }}>
            <Button
              className={classes.MuiButton}
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                emailHelper.length !== 0
              }
              onClick={() => setOpen(true)}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Dialog style={{ zIndex: "999999" }} open={open}>
        <DialogContent>
          <Grid item container direction="column">
            <Grid item>
              <Grid item>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={classes.MuiInput}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  error={emailHelper.length !== 0}
                  onChange={onChange}
                  helperText={emailHelper}
                  className={classes.MuiInput}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  error={phoneHelper.length !== 0}
                  onChange={onChange}
                  helperText={phoneHelper}
                  className={classes.MuiInput}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  label="Message"
                  id="message"
                  value={message}
                  multiline
                  onChange={(event) => setMessage(event.target.value)}
                  className={classes.MuiInput}
                ></TextField>
              </Grid>
              <Grid item style={{ marginTop: "1rem" }}>
                <Button onClick={handleClose}>Send</Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid item container className={classes.background}></Grid>
    </Grid>
  );
}
