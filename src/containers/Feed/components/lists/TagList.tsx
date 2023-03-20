import { TTags } from '@custeomTypes/index'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  className?: string
  data: TTags
}

const TagList: React.FC<Props> = ({ className, data }) => {
  const router = useRouter()
  const currentTag = router.query.tag || 'All'

  const handleClickTag = (value: any) => {
    router.push({
      query: {
        ...router.query,
        tag: value,
      },
    })
  }

  return (
    <div className={className}>
      <div className="hidden lg:block p-1 mb-3 dark:text-white">🏷️ Tags</div>
      <ul className="cursor-pointer gap-1 flex mobile-x-scroll lg:block mb-6">
        {Object.keys(data).map((key) => (
          <li
            key={key}
            className={`text-sm py-0.5 lg:pl-3 px-1.5 my-1 flex-shrink-0 rounded-xl text-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 ${
              key === currentTag &&
              'bg-gray-100 dark:bg-gray-800 font-semibold text-sky-500 dark:text-sky-500'
            }`}
            onClick={() => handleClickTag(key)}
          >
            <span>{key}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagList
