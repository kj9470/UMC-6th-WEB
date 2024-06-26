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
  width: 900px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 항상 4개의 열을 가지도록 설정
  justify-content: center;
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

const UpComing = () => {

  const [movies, setMovies] = useState([]);

  console.log(movies)

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}',
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

export default UpComing
