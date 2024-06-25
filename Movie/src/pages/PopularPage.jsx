import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from '../components/Common/MovieList';
import Pagination from '../components/Common/Pagination'; // 경로와 파일명을 대문자로 수정

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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmU2M2Q4Y2I5ODlmOWRmMWMwZDZiMjcwMjUzOWU1YSIsInN1YiI6IjY2NDM5MjM4YWFkOTI4NzA1MTY5NDY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XWAil1wXLZkUHxXjfAA7-m9-sLbFTP8Iv9hHZlmOCL8',
  },
};

const PopularPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-kr&page=${page}&sort_by=popularity.desc`,
        options
      );
      const data = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Body>
      <MoviesWrapper>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </MoviesWrapper>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Body>
  );
};

export default PopularPage;
