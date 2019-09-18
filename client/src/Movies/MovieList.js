import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const MovieList = props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
        // [ x ] * Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.
      ))}
    </div>
  );
}

export function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
