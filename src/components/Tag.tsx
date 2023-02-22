import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <a 
      onClick={() => handleClick(children)}
      className="mr-1 mb-2 text-xs md:text-sm font-medium uppercase text-sky-500 hover:text-sky-600 dark:hover:text-sky-400">
        {children}
    </a>
  )
}

export default Tag
