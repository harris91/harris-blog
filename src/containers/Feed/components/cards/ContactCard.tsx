import CONFIG from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

const ContactCard: React.FC = () => {

  const contactClass = "p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer flex items-center gap-3 text-gray-600 dark:text-white hover:text-black dark:hover:text-sky-500 "

  return (
    <>
      <div className="p-1 mt-10 mb-3 dark:text-white">💬 Contact</div>
      <ul className="rounded-md dark:bg-gray-800 p-1 flex flex-col list-none">
        {CONFIG.profile.github && (

          <li>
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              className={contactClass}
            >
              <AiOutlineGithub className="text-2xl" />
              <div className="text-sm">github</div>
            </a>
          </li>
        )}
        {CONFIG.profile.instagram && (
          <li>
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className={contactClass}
              >
              <AiOutlineInstagram className="text-2xl" />
              <div className="text-sm">instagram</div>
            </a>
          </li>
        )}
        {CONFIG.profile.email && (
          <li>
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className={contactClass}
            >
              <AiOutlineMail className="text-2xl flex-shrink-0" />
              <div className="text-sm">email</div>
            </a>
          </li>
        )}
        {CONFIG.profile.linkedin && (
          <li>
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className={contactClass}
            >
              <AiFillLinkedin className="text-2xl flex-shrink-0" />
              <div className="text-sm">linkedin</div>
            </a>
          </li>
        )}
      </ul>
    </>
  )
}

export default ContactCard
