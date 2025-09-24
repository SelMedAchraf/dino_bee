import React from 'react'
import { Search } from 'lucide-react'
import Input from './Input'

export default function SearchInput({ className = '', ...props }) {
  return (
    <div className={`relative ${className}`}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
      <Input className="pl-9" {...props} />
    </div>
  )
} 