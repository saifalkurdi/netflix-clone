// import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import axios from "axios";

function MovieCard({ result, handleShow, setSingleResult }) {
    const handleClick = () => {
        setSingleResult(result);
        handleShow();
    };

    return (
        <Card style={{ width: "18rem", display: "flex", flexDirection: "column", marginBottom: "1rem", backgroundColor: "#f4f4f4" }} key={result.id}>
            <Card.Img style={{ borderRadius: "5px" }} variant="top" alt={result.title} src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
            <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{result.title}</Card.Title>
                <Card.Text style={{ fontSize: "1rem", flexGrow: 1 }}>{result.overview}</Card.Text>

                <Button variant="primary" style={{ backgroundColor: "blue", color: "white", marginTop: "0.5rem" }} onClick={handleClick}>
                    Add To Favorite List
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
