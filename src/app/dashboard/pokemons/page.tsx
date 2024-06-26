
import { PokemonGrid } from "@/components";
import { PokemonsResponse, SimplePokemon } from "@/interfaces";

export const metadata = {
 title: '151 Pokemons',
 description: 'Nulla consectetur laborum esse ea ipsum qui sunt qui irure incididunt irure laboris.',
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

      <span className="text-5xl font-normal m-2">Listado de Pokémons <small>Estático</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
