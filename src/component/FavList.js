import React from 'react'

function FavList() {
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
const handleAddToFavorites = async () => {
        try {
            const { title, release_date, poster_path, overview } =
                singleResult;
            const res = await axios.post(
                `${process.env.REACT_APP_RESULTS_API}/addMovie`,
                { title, release_date, poster_path, overview, comments: comment }
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const handleInputChange = ({ target }) => {
        setComment(target.value);
    };

export default FavList
