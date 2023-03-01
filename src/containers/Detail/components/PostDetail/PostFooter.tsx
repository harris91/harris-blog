import { useRouter } from 'next/router'
import React from 'react'
import Tag from "@components/Tag"
import { TPost } from "@/src/types"

type Props = {
  data: TPost
}

const Footer: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  return (

    <>
      <p className="text-center text-gray-500 dark:text-gray-400 mt-8 mb-2 py-12 bg-gray-100 dark:bg-gray-800">
        긴 글 읽어주셔서 감사합니다. <br/>
        오탈자 및 내용 피드백은 언제나 환영합니다.
      </p>
      {data.tags && (
        <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags gap-2 mb-4">
          {data.tags.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}

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
    </>
  )
}

export default Footer
