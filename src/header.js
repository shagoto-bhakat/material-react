import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  tool: {
    marginTop: ".5rem",
    marginBottom: ".5rem",
    marginRight: "2rem",
    marginLeft: "2rem",
    backgroundColor: "#1872B9",
  },
  tabs: {
    marginLeft: "auto",
    marginRight: "2rem",
  },
  tab: {
    minWidth: 10,
    "&:hover": {
      color: "orange",
    },
  },
  menuItem: {
    backgroundColor: "#1872B9",
  },
  drawerIcon: {
    marginLeft: "auto",
  },
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const classes = useStyles((theme) => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
  }));

  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Services One", link: "/servicesone" },
    { name: "Services Two", link: "/servicestwo" },
    { name: "Services Three", link: "/servicesthree" },
  ];

  const tabs = (
    <React.Fragment>
      <Tabs value={value} className={classes.tabs} onChange={handleChange}>
        <Tab
          className={classes.tab}
          component={Link}
          to="/home"
          label="Home"
        ></Tab>
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          component={Link}
          to="/services"
          label="Services"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/therevolution"
          label="The Revolution"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/aboutus"
          label="About Us"
          href="test.js"
        ></Tab>
        <Tab
          className={classes.tab}
          component={Link}
          to="/contactus"
          label="Contact Us"
        ></Tab>
      </Tabs>
      <Button
        component={Link}
        to="/free-estimate"
        variant="contained"
        color="secondary"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ list: classes.tool }}
        elevation={0}
      >
        {/* <MenuItem onClick={handleClose}>Services One</MenuItem>
              <MenuItem onClick={handleClose}>Services Two</MenuItem>
              <MenuItem onClick={handleClose}>Services Three</MenuItem> */}

        {menuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(i);
              handleClose(event);
            }}
            selected={i === selectedIndex}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/home"
            selected={value === 0}
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 1}
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/therevolution"
            selected={value === 2}
          >
            <ListItemText disableTypography>Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/aboutus"
            selected={value === 3}
          >
            <ListItemText disableTypography>About US</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contactus"
            selected={value === 4}
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIcon}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon style={{ color: "#fff", fontSize: "2.5rem" }}></MenuIcon>
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"unset"} color={"primary"}>
          <Toolbar disableGutters className={classes.tool}>
            <IconButton
              component={Link}
              to="/"
              disableFocusRipple
              disableRipple
            >
              <img src={logo} alt="logo" width={85} height={85} />
            </IconButton>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
