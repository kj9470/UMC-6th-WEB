import React, { useEffect, useState } from 'react'
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

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmU2M2Q4Y2I5ODlmOWRmMWMwZDZiMjcwMjUzOWU1YSIsInN1YiI6IjY2NDM5MjM4YWFkOTI4NzA1MTY5NDY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XWAil1wXLZkUHxXjfAA7-m9-sLbFTP8Iv9hHZlmOCL8',
  },
};

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies)

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200',
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err))
  }, []);

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
  )
}

export default TopRatedPage