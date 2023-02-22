import React, { InputHTMLAttributes, ReactNode } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="p-1 mb-3 dark:text-white">Search</div>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {/* search Icon */}
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
        </div>
        <input
          className="rounded-md px-5 py-2 w-full 
            bg-gray-200 focus:bg-white focus:shadow-md hover:bg-gray-200
            dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500
            dark:focus:bg-gray-300 dark:focus:text-gray-800
            outline-none pl-10"
          type="text"
          placeholder="keyword"
          {...props}
        />
      </div>
    </div>
  )
}

export default SearchInput
