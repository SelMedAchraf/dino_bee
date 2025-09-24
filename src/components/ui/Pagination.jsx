import React from 'react'

function PageButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`min-w-[2.25rem] rounded-md px-3 py-2 text-sm font-medium transition-colors ${active ? 'bg-forest-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200'} border border-gray-200 dark:border-gray-700`}
    >
      {children}
    </button>
  )
}

export default function Pagination({ page, total, perPage, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const canPrev = page > 1
  const canNext = page < totalPages

  const pages = []
  for (let i = 1; i <= totalPages; i++) pages.push(i)

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      <button
        onClick={() => canPrev && onChange(page - 1)}
        disabled={!canPrev}
        className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        السابق
      </button>
      {pages.map(p => (
        <PageButton key={p} active={p === page} onClick={() => onChange(p)}>{p}</PageButton>
      ))}
      <button
        onClick={() => canNext && onChange(page + 1)}
        disabled={!canNext}
        className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
      >
        التالي
      </button>
    </div>
  )
} 