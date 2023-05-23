import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./Movie";

export default function MovieList({ movies, handleShow, setSingleResult }) {
  return (
    <Row>
      {movies.length &&
        movies.map((item) => (
          <MovieCard
            result={item}
            handleShow={handleShow}
            setSingleResult={setSingleResult}
          />
        ))}
    </Row>
  );
}