import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className='card col-3'>
        <img
          src={movie.Poster}
          className='img-thumbnail card-img-top'
          alt={movie.Title}
        />
        <div className='card-body'>
          <h5 className='card-title'>{movie.Title}</h5>
          <p className='card-text'>IMDB id: {movie.imdbID}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
