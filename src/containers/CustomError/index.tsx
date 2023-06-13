import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  errorType?: 'NOT_FOUND' | 'UNKNOWN'
}
const CustomError: React.FC<Props> = ({ errorType }) => {
  const router = useRouter()
  return (
    <div className={`m-auto max-w-4xl  dark:bg-gray-800 rounded-xl py-12 px-6 `}>
      {/* <button
        onClick={() => router.push('/')}
        className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
      >
        ← Back
      </button> */}
      <div className="py-20 flex flex-col items-center gap-10">
        <div className="text-8xl font-semibold flex items-center dark:text-white">
          <div>4</div>
          <Image src="/emoji/profile1.png" width={95} height={95} alt="error" />
          <div>4</div>
        </div>
        <div className="text-4xl text-gray-500 dark:text-gray-300 animate-pulse">Page not found</div>
        <button onClick={() => router.push('/')} 
          className="rounded-md px-6 py-2 text-sm text-sky-500  border-[1.5px] 
          border-sky-500 hover:bg-sky-500 hover:text-white
          dark:text-sky-400 dark:border-sky-400 dark:hover:border-sky-500 
          dark:hover:text-white dark:hover:bg-sky-500"
        >
          GO BACK HOME
        </button>
      </div>
    </div>
  )
}

export default CustomError
