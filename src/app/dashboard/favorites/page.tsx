
import { PokemonGrid, SimpleWidget } from "@/components";
import { PokemonsResponse, SimplePokemon } from "@/interfaces";

export const metadata = {
 title: 'Favoritos',
 description: 'Nulla consectetur laborum esse',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  /* throw new Error('Esto es un error que no debería de suceder') */
  return pokemons;
}

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col p-2">

      <span className="text-5xl font-normal m-2">Pokemons favorites <small className="text-rose-700">Global State</small></span>
        
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
