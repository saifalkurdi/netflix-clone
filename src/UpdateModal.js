// import { Card, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import axios from "axios";
// import { useState } from "react";

// function ModalMovie({ show, handleClose, singleResult, result }) {
//     const [comment, setComment] = useState("");

//     const handleAddToFavorites = async () => {
//         try {
//             const { title, release_date, poster_path, overview } =
//                 singleResult;
//             const res = await axios.post(
//                 `${process.env.REACT_APP_RESULTS_API}/addMovie`,
//                 { title, release_date, poster_path, overview, comments: comment }
//             );
//             console.log(res);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleInputChange = ({ target }) => {
//         setComment(target.value);
//     };

//     return (
//         <div>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{singleResult.title}</Modal.Title>
//                 </Modal.Header>

//                 <Modal.Body>
//                     <Card.Img
//                         variant="top"
//                         alt={singleResult.title}
//                         src={`https://image.tmdb.org/t/p/w500${singleResult.poster_path}`}
//                     />

//                     <Container className="my-4">
//                         <input
//                             onChange={handleInputChange}
//                             className="form-control"
//                             placeholder="add comment on movie"
//                         />
//                     </Container>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button onClick={handleAddToFavorites} variant="primary">
//                         Save changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default ModalMovie;