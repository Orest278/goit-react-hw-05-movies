import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getMovieDetails } from "../API/movies-api";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await getMovieDetails(id);
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [id]);

  const location = useLocation();
  const comeBack = useRef(location.state?.from || "/");

  const handleCastClick = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleReviewsClick = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  const { title, overview, release_date, vote_average, poster_path } = movie;

  return (
    <div>
      <Link to={comeBack.current}>Go back</Link>
      <h2>{title}</h2>
      <img
        width={200}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>Vote Average: {vote_average}</p>

      <p>Additional information:</p>
      <ul>
        <li>
          <button onClick={handleCastClick}>Cast</button>
        </li>
        <li>
          <button onClick={handleReviewsClick}>Reviews</button>
        </li>
      </ul>

      {showCast && (
        <div>
          <Cast />
        </div>
      )}

      {showReviews && (
        <div>
          <Reviews />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
