import { TTags } from '@custeomTypes/index'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'

type Props = {
  className?: string
  data: TTags
}


const DropTagList: React.FC<Props> = ({ className, data }) => {
  const router = useRouter()
  const currentTag = router.query.tag?.toString() || "All"
  const showTag = (tag: String) => tag === 'All' ? '' : tag
  const handleClickTag = (value: any) => {
    setSelectedTag(value);
    router.push({
      query: {
        ...router.query,
        tag: value,
      },
    })
  }

  const [selectedTag, setSelectedTag] = useState(currentTag)
  return (
    <div className={className}>
      <Menu as="div" className="w-full inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center focus:outline-none focus-visible:ring-1 
          focus-visible:ring-white focus-visible:ring-opacity-75 rounded-md px-4 py-2 text-sm font-medium 
          text-sky-500 border-[1.5px] border-sky-500 hover:bg-sky-500 hover:text-white
          dark:bg-sky-500 dark:border-0 dark:py-2.5 dark:text-white dark:bg-opacity-60 dark:hover:bg-opacity-80">
            #{showTag(currentTag)}
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute overflow-auto h-auto min-w-[150px] max-h-96 z-10 left-0 mt-2 w-full 
            rounded-md border border-black dark:border-white border-opacity-20 dark:border-opacity-10 
           bg-white dark:bg-zinc-900 bg-opacity-70 backdrop-blur-xl focus-visible:ring">
            <div className="px-1 py-1">
              {Object.keys(data).map((key) => (
                <Menu.Item key={key}>
                  {({ active }) => (
                    <button
                      className={`
                    group flex w-full items-center rounded-sm px-2 py-2 text-sm
                    ${active ? 'bg-gray-400 bg-opacity-30 dark:text-white' : 'dark:text-white'} 
                    ${key === currentTag && 'text-sky-600 dark:text-sky-600 font-bold'}
                  `}
                      onClick={() => handleClickTag(key)}
                    >
                      {key}
                      {key === currentTag && (
                        <span className="absolute right-0 flex items-center pr-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd"></path>
                          </svg>
                        </span>
                      )}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}


export default DropTagList