'use client'

import { useEffect, useState } from 'react'
import PokemonTable from './components/PokemonTable'
import Pagination from './components/Pagination'
import PokemonDetails from './components/PokemonDetails'

const LIMIT = 10

export default function PokePage() {
  const [pokemonList, setPokemonList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetchPokemon()
  }, [currentPage])

  const fetchPokemon = async () => {
    try {
      setLoading(true)
      setError(null)

      const offset = (currentPage - 1) * LIMIT
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
      )

      if (!res.ok) throw new Error('Failed to fetch Pokémon')

      const data = await res.json()
      setPokemonList(data.results)
      setTotalPages(Math.ceil(data.count / LIMIT))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left text-gray-800">
        Pokemon DataList Explorer
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center sm:text-left">
          {error}
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Table + Pagination */}
        <div className="lg:col-span-2">
          <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
            <PokemonTable
              pokemonList={pokemonList}
              loading={loading}
              currentPage={currentPage}
              onSelect={setSelectedPokemon}
            />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage(p => p - 1)}
            onNext={() => setCurrentPage(p => p + 1)}
          />
        </div>

        {/* Right: Details Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <PokemonDetails selectedPokemon={selectedPokemon} />
          </div>
        </div>
      </div>
    </div>
  )
}
