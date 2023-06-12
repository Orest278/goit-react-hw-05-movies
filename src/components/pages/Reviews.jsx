import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../API/movies-api';

function Reviews() {
  const { id } = useParams();
  const [review, setReview] = useState(null);
  useEffect(() => {
    getMovieReviews(id)?.then(setReview);
  }, [id, review?.length]);

  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {review?.length === 0 ? (
          <p>We don't have any reviews for this movies</p>
        ) : (
          review?.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p> {content}</p>

              <br />
              <br />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Reviews;