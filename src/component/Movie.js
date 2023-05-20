import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function MovieCard({ result, handleShow, setSingleResult }) {
  const handleClick = () => {
    setSingleResult(result);
    handleShow();
  };

  return (
    <Card style={{ width: "18rem" }} key={result.id}>
      <Card.Img variant="top" alt={result.title} src={result.backdrop_path} />
      <Card.Body>
        <Card.Title>{result.title}</Card.Title>
        <Card.Text>{result.overview}</Card.Text>
    
        <Button variant="primary" onClick={handleClick}>
          Add To Favorite List
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;