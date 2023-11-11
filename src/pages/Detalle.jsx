import { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../api/pokeApi";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getStatValue = (pokemon, statName) => {
  const stat = pokemon.stats.find((s) => s.stat.name === statName);
  return stat ? stat.base_stat : "N/A";
};

const getPokemonImageURL = (pokemon) => {
  if (pokemon.sprites && pokemon.sprites.front_default) {
    return pokemon.sprites.front_default;
  }
  return "";
};

const getPokemonTypes = (pokemon) => {
  return pokemon.types.map((type) => type.type.name).join(", ");
};

function Detalle() {
  const navigate = useNavigate();
  const { pokemones } = useParams();
  const pokemonName = pokemones;
  const capitalizedPokemonName = capitalizeFirstLetter(pokemonName);

  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      try {
        const details = await fetchPokemonDetails(pokemonName);
        setPokemon(details);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al cargar los detalles del Pokémon", error);
        setIsLoading(false);
      }
    };

    loadPokemonDetails();
  }, [pokemonName]);

  const handleVolver = () => {
    navigate("/pokemones");
  };

  return (
    <Container className="d-flex justify-content-center flex-column">
      <h1 className="text-center">{capitalizedPokemonName}</h1>
      {isLoading ? (
        <p>Cargando los detalles del Pokémon...</p>
      ) : (
        <Row className="d-flex justify-content-center">
          <Col sm={5}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={getPokemonImageURL(pokemon)}
                alt={pokemonName}
              />
            </Card>
          </Col>
          <Col sm={3}>
            <Card>
              <Card.Body>
                <Card.Text>
                  <p>Altura: {pokemon.height}</p>
                  <p>Peso: {pokemon.weight}</p>
                  <p>HP: {getStatValue(pokemon, "hp")}</p>
                  <p>Ataque: {getStatValue(pokemon, "attack")}</p>
                  <p>Defensa: {getStatValue(pokemon, "defense")}</p>
                  <p>
                    Ataque especial: {getStatValue(pokemon, "special-attack")}
                  </p>
                  <p>
                    Defensa especial: {getStatValue(pokemon, "special-defense")}
                  </p>
                  <p>Velocidad: {getStatValue(pokemon, "speed")}</p>
                  <p>Tipo: {getPokemonTypes(pokemon)}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      <Button className="mt-2" variant="primary" onClick={handleVolver}>
        Volver a la selección de personajes
      </Button>
    </Container>
  );
}

export default Detalle;
