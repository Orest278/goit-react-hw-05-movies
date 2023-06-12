import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../API/movies-api";


const Cast = () => {
const { id } = useParams();
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    getMovieCast(id)?.then(setCasts);
  }, [id]);

  return (
      { casts } && <div>
      <h2>Cast:</h2>
      <ul>
        {casts?.map(({ id, profile_path, name, character }) => (
          <li key={id}>
                <img
                    width={100}
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
