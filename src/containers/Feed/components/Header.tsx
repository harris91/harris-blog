import { TTags } from '@/src/types'
import { useRouter } from 'next/router'
import React from 'react'

type TOrder = 'asc' | 'desc'

type Props = {
  tags: TTags
}

const Header: React.FC<Props> = ({ tags }) => {
  const router = useRouter()

  const currentTag = router.query.tag?.toString() || 'All'
  const currentOrder = router.query.order || ('desc' as TOrder)

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    })
  }

  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 justify-between items-center ">
      <div className="text-xl font-bold dark:text-white">
        {currentTag} Posts{' '}
        <span className="text-sm align-text-top">({tags[currentTag]})</span>
      </div>
      <div className={`flex text-sm gap-2`}>
        <span
          className={`cursor-pointer ${
            currentOrder === 'desc'
              ? 'font-bold dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => handleClickOrderBy('desc')}
        >
          Desc
        </span>
        <span
          className={`cursor-pointer ${
            currentOrder === 'asc'
              ? 'font-bold dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => handleClickOrderBy('asc')}
        >
          Asc
        </span>
      </div>
    </div>
  )
}

export default Header
