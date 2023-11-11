import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchPokemonList } from "../api/pokeApi";

function Pokemones() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [selectedPersonaje, setSelectedPersonaje] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedPersonaje(event.target.value);
  };

  const handleVerDetalle = () => {
    if (selectedPersonaje) {
      navigate(`/pokemones/${selectedPersonaje}`);
    }
  };

  return (
    <Container className="d-flex justify-content-center flex-column g-5">
      <h2 className="mb-5 mt-5 text-center">Selecciona un Pokemon</h2>
      {isLoading ? (
        <p>Cargando la lista de Pokémon...</p>
      ) : (
        <Form className="d-flex justify-content-center flex-column g-5">
          <Form.Group>
            <Form.Control as="select" onChange={handleSelectChange}>
              <option value="">Selecciona un pokemon</option>
              {pokemonList &&
                pokemonList.map((pokemon) => (
                  <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Button className="mt-5" variant="primary" onClick={handleVerDetalle}>
            Ver detalle
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default Pokemones;
