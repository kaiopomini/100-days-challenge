import React, {useEffect, useState} from 'react';

import Movie from './components/Movie'

const FEATURED_API = process.env.REACT_APP_FEATURED_API;

const SEARCH_API = process.env.REACT_APP_SEARCH_API;



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
        console.log(data.results)
      });
    
  },[])

  return (
    <div className="movie-container">
      {movies.map(movie => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
  );
}

export default App;
