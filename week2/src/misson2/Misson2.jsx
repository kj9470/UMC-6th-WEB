import './Movie.css';
import Movie from './components/MovieList';
import data from './data/movieList.json';

function Misson2() {
  const movies = data.results;

  return (
    <div className='movies'>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Misson2;