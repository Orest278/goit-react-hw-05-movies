import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListMovies from './ListMovie/ListMovie';
import { searchMovies } from '../API/movies-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const strQuery = query.get('query');
    if (strQuery) searchMovies(strQuery).then(setMovies);
    if (!strQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.q.value,
    });
    e.currentTarget.reset();

  }

  return (
    <div>
       <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
      <label>
        <input name="q" type="text" />
      </label>
      <button type="submit">Search</button>
      {movies?.length > 0 && (
        <>
          <ListMovies list={movies} />
        </>
      )}
    </form>
    </div>
    
  );
};

export default Movies