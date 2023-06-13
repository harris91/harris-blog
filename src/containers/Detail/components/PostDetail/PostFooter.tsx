import { useRouter } from 'next/router'
import React from 'react'
import Tag from "@components/Tag"
import { TPost } from "@/src/types"
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

type Props = {
  data: TPost
}

const Footer: React.FC<Props> = ({ data }) => {
  let [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    setShowButton(showButton = window.scrollY > 500 ? true : false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll) //mount
    return () => window.removeEventListener("scroll",handleScroll) //unmount
  }, [])
  
  const router = useRouter()
  return (

    <>

      {data.slug != 'about' && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8 mb-2 py-12 bg-gray-100 dark:bg-gray-800">
          긴 글 읽어주셔서 감사합니다. <br/>
          오탈자 및 내용 피드백은 언제나 환영합니다.
        </p>
      )}
      {data.tags && (
        <div className="flex flex-nowrap max-w-full overflow-x-auto gap-2 mb-4">
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

        {/* 상단 이동 버튼 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`${showButton ? 'opacity-40 lg:opacity-100' : 'opacity-0'} 
          z-20 fixed  p-3 text-lg bottom-8 right-8 cursor-pointer rounded-full  bg-sky-500 text-white 
          duration-500 hover:bg-sky-400 hover:mb-1 hover:opacity-100`}
        >
          <FaArrowUp/>
        </button>
      </div>
    </>
  )
}

export default Footer
