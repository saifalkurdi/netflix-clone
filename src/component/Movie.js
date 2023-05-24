// import { Container } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function MovieCard({ result, handleShow, setSingleResult, canEdit=false, updateResultState }) {
    const handleClick = () => {
        setSingleResult(result);
        handleShow();
    };

    const deletedMovie = () => {
        axios.delete(`${process.env.REACT_APP_RESULTS_API}/getMovies/${result.id}`)
        .then(res => {
         console.log('delete');
            updateResultState(result.id)
        })
        .catch(err => console.log(err)) 
    }

    return (
        <Card style={{ width: "18rem", display: "flex", flexDirection: "column", marginBottom: "1rem", backgroundColor: "#f4f4f4" }} key={result.id}>
            <Card.Img style={{ borderRadius: "5px" }} variant="top" alt={result.title} src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
            <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Card.Title style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{result.title}</Card.Title>
                <Card.Text style={{ fontSize: "1rem", flexGrow: 1 }}>{result.overview}</Card.Text>
            {
                !canEdit &&
                <Button variant="primary" style={{ backgroundColor: "blue", color: "white", marginTop: "0.5rem" }} onClick={handleClick}>
                    Add To Favorite List
                </Button>
                }
                {
                    canEdit &&
                    <>
                    <Button variant="success">Update</Button>
                    <Button variant="danger" onClick={deletedMovie}>Delete</Button>
                    </>
                }
            </Card.Body>
        </Card>
    );
}

export default MovieCard;
