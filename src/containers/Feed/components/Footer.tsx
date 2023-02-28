import CONFIG from "@/site.config"
import Link from "next/link"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    
    <div>
      <div className="block lg:hidden flex justify-center mt-8">
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          rel="noreferrer"
          target="_blank"
          className="overflow-hidden px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer flex items-center gapx-3 text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white "
        >
          <AiOutlineGithub className="text-2xl" />
        </a>
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer flex items-center gapx-3 text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <AiOutlineInstagram className="text-2xl" />
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer flex items-center gapx-3 text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            {/* <AiOutlineMail className="text-2xl flex-shrink-0" /> */}
            <svg viewBox="0 0 20 20" className="fill-current text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 h-6 w-6"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md cursor-pointer flex items-center gapx-3 text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
          </a>
        )}
      </div>

      {/* 저작 */}
      <div className={className + " block flex pb-8"}>
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          target="_blank"
          className="text-gray-400 text-sm mt-3"
          rel="noreferrer"
        >
          © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
        </a>
      </div>
    </div>
  )
}

export default Footer
