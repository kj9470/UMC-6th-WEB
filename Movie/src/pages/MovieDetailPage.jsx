// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.div`
  padding: 20px;
  background-color: rgb(49, 49, 82);
  color: white;
  min-height: 100vh;
`;

const MovieDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const MovieTitle = styled.h1`
  margin: 20px 0;
  font-size: 36px;
`;

const MovieInfo = styled.div`
  margin: 10px 0;
`;

// const StarIcon = styled.span`
//   color: #FFD700;
//   margin-right: 5px;
// `;

const MovieDetailPage = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=YOUR_API_KEY`);
        const data = await response.json();
        setMovie(data.results[0]);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetail();
  }, [title]);

  if (!movie) {
    return <Body>Loading...</Body>;
  }

  const stars = Math.floor(movie.vote_average / 2);

  return (
    <Body>
      <MovieDetailWrapper>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieInfo>
          <p>평점: {Array(stars).fill('⭐️').join('')}</p>
          <p>개봉일: {movie.release_date}</p>
          <p>줄거리: {movie.overview ? movie.overview : '줄거리가 없습니다.'}</p>
        </MovieInfo>
      </MovieDetailWrapper>
    </Body>
  );
};

export default MovieDetailPage;
