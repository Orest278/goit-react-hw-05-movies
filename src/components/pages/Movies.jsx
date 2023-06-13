import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { searchMovies } from '../API/movies-api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setSearchResults(movies);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(location.search);
    const queryParam = urlSearchParams.get('query');
    if (queryParam) {
      setQuery(queryParam);
      handleSearch();
    }
  }, [location.search, handleSearch]);

  const updateURL = () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('query', query);
    navigate(`/movies?${urlSearchParams.toString()}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    updateURL();
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

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
