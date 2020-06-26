import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    backgroundAttachment: "relative",
    height: "auto"
  }
};

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, movie } = this.props;
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={"https://image.tmdb.org/t/p/w400/" + movie.poster_path}
            title={movie.title}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {movie.title}
            </Typography>
            <Typography component="p">
              {movie.overview.substring(0, 200) + "..."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieCard);
