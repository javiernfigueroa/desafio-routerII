const BASE_URL = "https://pokeapi.co/api/v2/";

export async function fetchPokemonList() {
  try {
    const response = await fetch(`${BASE_URL}pokemon?limit=10`);
    if (!response.ok) {
      throw new Error("No se pudo obtener la lista de Pokémon");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon", error);
    throw error;
  }
}

export async function fetchPokemonDetails(name) {
  try {
    const response = await fetch(`${BASE_URL}pokemon/${name}`);
    if (!response.ok) {
      throw new Error("No se pudieron obtener los detalles del Pokémon");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los detalles del Pokémon", error);
    throw error;
  }
}

