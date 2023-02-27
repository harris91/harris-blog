import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Footer: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400">
      <span>
        <button
          onClick={() => router.push('/')}
          className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
        >
          ← Back
        </button>
      </span>
      <span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
        >
          ↑ Top
        </button>
      </span>
    </div>
  )
}

export default Footer
