'use client'

export default function Pagination({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) {
  if (totalPages === 0) return null

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded
          ${currentPage === 1
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'}`}
      >
        Previous
      </button>

      <span className="text-sm text-gray-700">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded
          ${currentPage === totalPages
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'}`}
      >
        Next
      </button>
    </div>
  )
}
