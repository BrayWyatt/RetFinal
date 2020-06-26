import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { mailFolderListItems, otherMailFolderListItems } from "./DrawerData";
import Discover from "./Discover";
import Movies from "./Movies";
import People from "./People";
import Television from "./Television";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: 0
  },
  "content-right": {
    marginRight: 0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  },
  // Drawer
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

class PersistentDrawer extends React.Component {
  state = {
    open: false,
    movie: []
  };

  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    const movieList = this.state.movie.results || [];
    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
      </div>
    );
    return (
      <React.Fragment>
        <SwipeableDrawer
          open={this.state.open}
          onClose={this.handleDrawer}
          onOpen={this.handleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleDrawer}
            onKeyDown={this.handleDrawer}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawer}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap>
                  bemovie
                </Typography>
              </Toolbar>
            </AppBar>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div className={classes.drawerHeader} />

              <Route exact path="/" component={Discover} />
              <Route path="/movies" component={Movies} />
              <Route path="/television" component={Television} />
              <Route path="/people" component={People} />

              <div className={classes.drawerHeader} />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);
