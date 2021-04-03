import React from 'react';

const IMG_API = process.env.REACT_APP_IMG_API;

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    
    <img src={IMG_API + poster_path} alt={title}></img>
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>

    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
      
  </div>
);

export default Movie;