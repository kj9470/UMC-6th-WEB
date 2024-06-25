import React, { forwardRef } from 'react';
import styled from 'styled-components';

const MovieBody = styled.div`
  width: 210px;
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 75%;
  margin: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const MovieInfo = styled.div`
  padding: 10px;
  display: flex;
  flex: 1;
  color: white;
  font-size: 14px;
  background-color: rgb(83, 83, 134);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const MovieTitle = styled.div`
  width: 80%;
  box-sizing: border-box;
  word-wrap: break-word;
`;

const MovieVoteAverage = styled.div`
  position: static;
  margin-left: 16px;
`;

const StarIcon = styled.span`
  color: #FFD700;
  margin-right: 5px;
`;

const MovieList = forwardRef(({ movie }, ref) => {
  const { poster_path, title, vote_average } = movie;
  return (
    <MovieBody ref={ref}>
      <MoviePoster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieVoteAverage><StarIcon>★</StarIcon>{vote_average}</MovieVoteAverage>
      </MovieInfo>
    </MovieBody>
  );
});

export default MovieList;

