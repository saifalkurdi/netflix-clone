import React, { useEffect, useState } from "react";
import MovieCard from "./Movie";
import { Row } from "react-bootstrap";
import axios from "axios";
import ModalMovie from "./ModalMovie";
import MovieList from "./MovieList";

export default function Home() {
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [singleResult, setSingleResult] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_RESULTS_API}/trending`);
      console.log(res);
      setResults(res.data.movie);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Row>
        <MovieList
          movies={results}
          setSingleResult={setSingleResult}
          handleShow={handleShow}
        />
      </Row>
      <ModalMovie
        show={show}
        handleClose={handleClose}
        singleResult={singleResult}
      />
    </div>
  );
}
