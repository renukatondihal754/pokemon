"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const filtered = pokemons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-purple-800 to-pink-700 p-8 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">
          Pokémon Explorer
        </h1>
        <p className="text-indigo-200 max-w-md mx-auto text-sm sm:text-base">
          Discover your favorite Pokémon! Search and explore details for the first 151 Pokémon.
        </p>
      </header>
{/* 
        <input
      type="text"
      placeholder="Search Pokémon..."
      className="w-72 sm:w-80 px-6 py-3 rounded-full border border-indigo-400 bg-indigo-100 text-indigo-900 placeholder-indigo-400
        focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition mb-10 shadow-md text-base"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    /> */}

    <div className="max-w-md w-full mx-auto relative mb-10">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-500"
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </div>
  <input
    type="text"
    placeholder="Search Pokémon..."
    className="block w-full p-4 pl-10 pr-28 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-pink-500 focus:border-pink-500 shadow-md"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button
    type="button"
    className="text-white absolute right-2.5 bottom-2.5 bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2"
  >
    Search
  </button>
</div>


      <main className="w-full max-w-7xl">
        {filtered.length === 0 ? (
          <p className="text-center text-white text-lg font-semibold mt-20">
            No Pokémon found matching "{search}"
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-8">
            {filtered.map((pokemon, index) => (
              <Link
                key={pokemon.name}
                href={`/pokemon/${index + 1}`}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center cursor-pointer"
                >
                
                 <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemon.name}
                    className="w-20 h-20 object-contain"
                    loading="lazy"
                  />

                  <div className="flex items-center space-x-3">
                    <p className="capitalize text-xl font-semibold text-gray-900 truncate">
                      {pokemon.name}
                    </p>
                    {/* <span
                      className="text-sm font-mono text-pink-600 bg-pink-200 px-3 py-1 rounded-full select-none"
                      title={`#${index + 1}`}
                    >
                      #{index + 1}
                    </span> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
