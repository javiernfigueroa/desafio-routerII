import { Container, Image } from "react-bootstrap";
import pikachu from "../assets/pikachu.png";
function Home() {
  return (
    <Container className="text-center">
      <div className="">
        <h2 className="mt-5">Bienvenido Pokelover</h2>
        <Image className="w-50 p-5" src={pikachu} alt="Pikachu" fluid />
      </div>
    </Container>
  );
}

export default Home;
