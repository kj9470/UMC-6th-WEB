import React from 'react';
import './MovieList.css';

export default function Movie({ movie }) {
  const { poster_path, title, vote_average } = movie;
  return (
    <div className='movieList-body'>
      <img
        className='movieList-poster'
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className='movieList-info'>
        <div className='movieList-title'>{title}</div>
        <div className='movieList-vote_average'>{vote_average}</div>
      </div>
    </div>
  );
}