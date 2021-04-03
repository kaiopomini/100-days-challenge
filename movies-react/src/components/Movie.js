import React from 'react';

const IMG_API = process.env.REACT_APP_IMG_API;

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}

const Movie = ({ title, poster_path, overview, vote_average }) => (
  <div className="movie">
    
    <img src={(poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80' )} alt={title}></img>
    <div className="movie-info">
      <h3>{title}</h3>
      <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
    </div>

    <div className="movie-over">
      <h2>Overview:</h2>
      <p>{overview}</p>
    </div>
      
  </div>
);

export default Movie;