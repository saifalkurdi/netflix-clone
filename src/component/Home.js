import React, { useEffect, useState } from "react";
import MovieCard from "./Movie";
import { Row } from "react-bootstrap";
import axios from "axios";
import ModalMovie from "./ModalMovie";

export default function Home() {

  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [singleResult, setSingleResult] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_RESULTS_API}?limit=10`);
      console.log(res.data.results);
      setResults(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
      <Row>
        {results.length &&
         results.map((item) =>
          <MovieCard result={item} handleShow={handleShow} 
          setSingleResult={setSingleResult}/>)}
      </Row>
      <ModalMovie show={show} handleClose={handleClose}
      singleResult={singleResult}/>
    </div>
  );
}
