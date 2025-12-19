'use client'

import { useEffect, useState } from 'react'

export default function PokemonDetails({ selectedPokemon }) {
  const [details, setDetails] = useState(null)
  const [activeType, setActiveType] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!selectedPokemon) return

    const fetchDetails = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        )

        if (!res.ok) throw new Error('Failed to fetch details')

        const data = await res.json()
        setDetails(data)
        setActiveType(data.types[0].type.name)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [selectedPokemon])

  return (
    <div className="border rounded p-4 bg-white shadow-md h-[400px] lg:h-[500px] overflow-y-auto transition-all lg:min-w-[300px]">
      {!selectedPokemon && (
        <p className="text-gray-500 text-center mt-20">
          Select a Pokémon to view details
        </p>
      )}

      {loading && (
        <p className="text-gray-600 text-center mt-20">Loading details...</p>
      )}

      {error && (
        <p className="text-red-600 text-center mt-20">{error}</p>
      )}

      {details && !loading && !error && (
        <>
          <h2 className="text-lg font-semibold mb-2 capitalize text-center lg:text-left">
            {details.name}
          </h2>

          {/* Type Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {details.types.map((t) => (
              <button
                key={t.type.name}
                onClick={() => setActiveType(t.type.name)}
                className={`px-3 py-1 border rounded flex-shrink-0
                  ${
                    activeType === t.type.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100'
                  }`}
              >
                {t.type.name}
              </button>
            ))}
          </div>

          {/* Type Info */}
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Game Indices:</strong> {details.game_indices.length}
            </p>
            <p>
              <strong>Total Moves:</strong> {details.moves.length}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
