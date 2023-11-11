import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { MdStars } from "react-icons/md";

export default function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink as={NavLink} to="/">
            <MdStars size={30} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/">
              Bienvenido
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pokemones">
              Pokemones
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
