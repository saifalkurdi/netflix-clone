import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({result, handelShow, setSingleResult}) {
  const handleClick = () => {
    setSingleResult(result)
    handelShow()
  }
  return (
    <Card style={{ width: '18rem' }} key={result.id}>
      <Card.Img variant="top" src={result.backdrop_path} />
      <Card.Body>
        <Card.Title>{result.title}</Card.Title>
        <Card.Text>
          {result.overview}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Add To Favorite List</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;