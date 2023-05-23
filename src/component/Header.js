import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
<Navbar bg="light" expand="lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#f8f8f8", padding: "10px 20px", margin: "10px 0", border: "2px solid black" }}>
    <Container>
        <Navbar.Brand href="#home" style={{ color: "blue", fontWeight: "bold", fontSize: "1.2rem", textDecoration: "none", cursor: "pointer" }}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/" style={{ color: "gray", textDecoration: "none", cursor: "pointer" }}>Home</Nav.Link>
                <Nav.Link href="/Fav" style={{ color: "gray", textDecoration: "none", cursor: "pointer" }}>FavList</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>

    )
}
