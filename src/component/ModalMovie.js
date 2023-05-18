import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalMovie({show, handleClose, singleResult}) {
  console.log(show)
  return (
    <div
      
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleResult.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Img src={singleResult.backdrop_path}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalMovie;