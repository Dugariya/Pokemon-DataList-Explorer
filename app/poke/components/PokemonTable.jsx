"use client";

import PokemonRow from "./PokemonRow";

export default function PokemonTable({
  pokemonList,
  loading,
  currentPage,
  onSelect,
}) {
  if (loading) {
    return (
      <div className="border rounded p-6 text-center">Loading Pokemon...</div>
    );
  }

  return (
    <table className="w-full border mb-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border px-4 py-2">Sr. No.</th>
          <th className="border px-4 py-2">Poke Name</th>
        </tr>
      </thead>

      <tbody>
        {pokemonList.map((pokemon, index) => (
          <PokemonRow
            key={pokemon.name}
            pokemon={pokemon}
            index={index}
            currentPage={currentPage}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </table>
  );
}
