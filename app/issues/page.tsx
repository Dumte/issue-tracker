"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const IssuesPage = () => {
    const currentPath = usePathname()
  return (
    <div>
      Issues
    </div>
  )
}

export default IssuesPage
