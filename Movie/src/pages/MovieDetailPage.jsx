import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Body = styled.div`
  padding: 20px;
  background-color: rgb(49, 49, 82);
  color: white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -2;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.07);  /* 반투명한 검정색 오버레이 */
    backdrop-filter: blur(10px);
    z-index: -1;
  }
`;

const MovieDetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1200px;
  gap: 40px;
  z-index: 2;
`;

const MoviePoster = styled.img`
  width: 300px;
  border-radius: 8px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 36px;
`;

const MovieDetails = styled.div`
  margin-bottom: 20px;
`;

const StarIcon = styled.span`
  color: #FFD700;
  margin-right: 5px;
`;

const MovieDetailPage = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const decodedTitle = decodeURIComponent(title);
        console.log(`Fetching details for: ${decodedTitle}`);
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${decodedTitle}&language=ko-kr`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmU2M2Q4Y2I5ODlmOWRmMWMwZDZiMjcwMjUzOWU1YSIsInN1YiI6IjY2NDM5MjM4YWFkOTI4NzA1MTY5NDY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XWAil1wXLZkUHxXjfAA7-m9-sLbFTP8Iv9hHZlmOCL8',
            },
          }
        );
        const data = await response.json();
        console.log('API Response:', data);
        if (data.results && data.results.length > 0) {
          setMovie(data.results[0]);
        } else {
          setMovie(null);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [title]);

  if (loading) {
    return <Body>Loading...</Body>;
  }

  if (!movie) {
    return <Body>Movie not found</Body>;
  }

  const stars = Math.floor(movie.vote_average / 2);

  return (
    <Body bgImage={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}>
      <MovieDetailWrapper>
        <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <MovieInfo>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails>
            <p>평점: {Array(stars).fill('⭐️').join('')}</p>
            <p>개봉일: {movie.release_date}</p>
          </MovieDetails>
          <MovieDetails>
            <p>줄거리: {movie.overview ? movie.overview : '줄거리가 없습니다.'}</p>
          </MovieDetails>
        </MovieInfo>
      </MovieDetailWrapper>
    </Body>
  );
};

export default MovieDetailPage;
