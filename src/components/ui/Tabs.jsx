import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export function Tabs({ defaultValue, children, className = '' }) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} className={className}>
      {children}
    </TabsPrimitive.Root>
  )
}

export function TabsList({ children, className = '' }) {
  return (
    <TabsPrimitive.List className={`inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-700 dark:bg-gray-800 dark:text-gray-200 ${className}`}>
      {children}
    </TabsPrimitive.List>
  )
}

export function TabsTrigger({ value, children, className = '' }) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey-500 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-forest-700 data-[state=active]:shadow dark:data-[state=active]:bg-gray-900 ${className}`}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

export function TabsContent({ value, children, className = '' }) {
  return (
    <TabsPrimitive.Content value={value} className={`mt-4 focus-visible:outline-none ${className}`}>
      {children}
    </TabsPrimitive.Content>
  )
} 