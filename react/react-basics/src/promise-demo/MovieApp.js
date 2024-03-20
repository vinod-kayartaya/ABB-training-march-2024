import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieApp = () => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(undefined);

  const loadMovies = () => {
    const url = `https://www.omdbapi.com/?apikey=aa9e49f&s=${searchText}`;

    fetch(url)
      .then((resp) => resp.json()) // promise resolved
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
          setError(undefined);
        } else {
          setMovies([]);
          setError(`No movies found for search text ${searchText}`);
        }
      })
      .catch(); // promise rejected
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (searchText.trim().length === 0) return;

    loadMovies();
  };

  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>Search for movies by title</h1>
        </div>
      </div>
      <div className='container'>
        <form onSubmit={submitHandler}>
          <input
            autoFocus
            type='search'
            placeholder='some title...'
            className='form-control'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>

        <div className='row'>
          {movies.map((m) => (
            <MovieCard movie={m} key={m.imdbID} />
          ))}
        </div>

        {error && <h3 className='text-danger'>{error}</h3>}
      </div>
    </>
  );
};

export default MovieApp;
