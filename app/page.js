"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 text-center">
        Pokemon Data List Explorer
      </h1>

      <p className="text-gray-700 text-center mb-8 max-w-lg">
        Explore your favorite Pokemon! Browse, search, and view details
        including moves, types, and game indices.
      </p>

      {/* Go to Pokémon Page Button */}
      <Link href="/poke">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
          Explore Pokemon List
        </button>
      </Link>

      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pokémon Pikachu"
        className="mt-12 w-40 h-40 sm:w-56 sm:h-56"
      />
          <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pokémon Pikachu"
        width={224} // Adjusted for sm:w-56
        height={224} // Adjusted for sm:h-56
        className="mt-12"
      />
      <footer className="mt-auto text-center py-4 text-gray-500 text-sm">
        Developed by Pawan Dugariya |
        <a
          href="https://github.com/Dugariya/Pokemon-DataList-Explorer"
          className="text-blue-600 hover:underline ml-1"
          target="_blank"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
