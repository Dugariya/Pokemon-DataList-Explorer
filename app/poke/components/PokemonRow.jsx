'use client'

export default function PokemonRow({
  pokemon,
  index,
  currentPage,
  onSelect,
}) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-4 py-2">
        {(currentPage - 1) * 10 + index + 1}
      </td>

      <td
        className="border px-4 py-2 text-blue-600 cursor-pointer hover:underline"
        onClick={() => onSelect(pokemon.name)}
      >
        {pokemon.name}
      </td>
    </tr>
  )
}
