import React from 'react';
import styled from 'styled-components';
import Movie from '../components/Common/MovieList';
import data from '../data/movieList.json';

const Body = styled.div`
  padding: 0;
  margin: 0;
  background-color: rgb(49, 49, 82);
`;

const MoviesWrapper = styled.div`
  width: 1280px;
  margin: 0px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;


const NowPlayingPage = () => {
  const movies = data.results;

  return (
    <Body>
      <MoviesWrapper>
        {movies.map((movie) => (
          <Movie key={movie.id}
            movie={movie}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </MoviesWrapper>
    </Body>
  );
}

export default NowPlayingPage;
