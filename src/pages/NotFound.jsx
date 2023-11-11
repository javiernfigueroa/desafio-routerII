import { Container } from "react-bootstrap";
import notFoundImage from "../assets/deca.jpg";

function NotFound() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={notFoundImage}
        alt="Página no encontrada"
        style={{ maxWidth: "100%" }}
      />
      <h1>Página no encontrada</h1>
      <p>Error 404</p>
    </Container>
  );
}

export default NotFound;
