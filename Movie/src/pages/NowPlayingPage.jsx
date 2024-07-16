// src/pages/NowPlayingPage.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import MovieList from '../components/Common/MovieList';
import LoadingSpinner from '../components/Common/LoadingSpinner';

const Body = styled.div`
  padding: 0;
  margin: 0;
  background-color: rgb(49, 49, 82);
`;

const MoviesWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 210px); 
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer YOUR_API_KEY',
  },
};

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const fetchMovies = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=${page}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
        options
      );
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
  };

  const lastMovieElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <Body>
      <MoviesWrapper>
        {movies.map((movie, index) => {
          if (movies.length === index + 1) {
            return (
              <MovieList
                ref={lastMovieElementRef}
                key={movie.id}
                movie={movie}
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            );
          } else {
            return (
              <MovieList
                key={movie.id}
                movie={movie}
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            );
          }
        })}
      </MoviesWrapper>
      {loading && <LoadingSpinner />}
    </Body>
  );
};

export default NowPlayingPage;
