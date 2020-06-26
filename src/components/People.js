import React from "react";
import MovieCard from "./Card";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

class People extends React.Component {
  state = {
    movie: []
  };

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/person/popular?api_key=4be2595988fdcab8c1e973d60c196a40&language=en-US&page=1'
      )
      .then(res => {
        const movie = res.data;
        this.setState({ movie });
      });
  }

  render() {
    const movieList = this.state.movie.results || [];
    return (
      <Grid container spacing={16}>
        {movieList.map((val, key) => {
          return (
            <Grid key={key} item>
              <MovieCard movie={val} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default People;
