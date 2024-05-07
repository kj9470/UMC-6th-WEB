import React from 'react';
import './MovieList.css';

export default function Movie({ movie }) {
  const { poster_path, title, vote_average } = movie;
  return (
    <div className='movie-tile'>
      <img
        className='movie-poster'
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className='movie-info'>
        <div className='movie-title'>{title}</div>
        <div>{vote_average}</div>
      </div>
    </div>
  );
}