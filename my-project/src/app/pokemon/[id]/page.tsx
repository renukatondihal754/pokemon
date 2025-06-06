// src/app/pokemon/[id]/page.tsx
import React from "react";

interface PokemonDetailProps {
  params: { id: string };
}

interface Pokemon {
  name: string;
  sprites: {
      other: any; front_default: string 
};
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  moves: { move: { name: string } }[];
}

async function getPokemon(id: string): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch Pokemon data");
  return res.json();
}

export default async function PokemonPage({ params }: PokemonDetailProps) {
  const pokemon = await getPokemon(params.id);

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-lg">
      <h1 className="text-5xl font-extrabold capitalize mb-8 text-center text-indigo-700 drop-shadow-md">
        {pokemon.name}
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Pokemon Image */}
       

        <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-xl shadow-lg bg-white p-4"
            />


        <div className="flex-1 space-y-8">
          {/* Types */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Types</h2>
            <ul className="flex flex-wrap gap-4">
              {pokemon.types.map(({ type }) => (
                <li
                  key={type.name}
                  className="px-4 py-2 rounded-full bg-indigo-500 text-white font-medium capitalize shadow-md hover:bg-indigo-600 transition"
                >
                  {type.name}
                </li>
              ))}
            </ul>
          </section>

          {/* Abilities */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Abilities</h2>
            <ul className="list-disc list-inside space-y-1 text-lg">
              {pokemon.abilities.map(({ ability }) => (
                <li key={ability.name} className="capitalize">
                  {ability.name}
                </li>
              ))}
            </ul>
          </section>

          {/* Stats */}
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600">Stats</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pokemon.stats.map(({ base_stat, stat }) => (
                <li
                  key={stat.name}
                  className="capitalize font-semibold bg-white rounded-lg shadow p-3 flex justify-between items-center"
                >
                  <span>{stat.name.replace("-", " ")}</span>
                  <span className="text-indigo-700">{base_stat}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Moves */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Moves</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-h-64 overflow-y-auto p-4 bg-white rounded-lg shadow-inner border border-indigo-200">
          {pokemon.moves.map(({ move }) => (
            <li
              key={move.name}
              className="capitalize text-sm bg-indigo-100 text-indigo-800 rounded-md py-1 px-3 text-center font-medium hover:bg-indigo-200 transition cursor-default select-none"
              title={move.name}
            >
              {move.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
