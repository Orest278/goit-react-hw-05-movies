import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../API/movies-api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setSearchResults(movies);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;