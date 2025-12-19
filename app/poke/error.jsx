'use client'

export default function Error({ error, reset }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-700 mb-4">
        Unable to load Pokemon List. Please try again.
      </p>

      <button
        onClick={reset}
        className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
      >
        Retry
      </button>
    </div>
  )
}
