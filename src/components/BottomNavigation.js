import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DiscoverIcon from "@material-ui/icons/LocationSearching";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import PeopleIcon from "@material-ui/icons/People";

const styles = {
  root: {
    width: "100%",
    bottom: 0,
    position: "fixed",
    zIndex: "1201",
    left: 0,
    right: 0,
    borderTop: "2px solid #eee"
  }
};

class BottomNav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Discover"
          icon={<DiscoverIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/movies"
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/television"
          label="Television"
          icon={<TvIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/people"
          label="People"
          icon={<PeopleIcon />}
        />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomNav);
