import React, { useEffect } from 'react'

export default function Modal({ open, onClose, title, children, footer }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="card w-full max-w-lg p-6" role="document">
          {title && <h2 id="modal-title" className="text-lg font-semibold mb-4">{title}</h2>}
          <div className="mb-4">{children}</div>
          {footer && <div className="mt-2 flex justify-end gap-2">{footer}</div>}
        </div>
      </div>
    </div>
  )
} 