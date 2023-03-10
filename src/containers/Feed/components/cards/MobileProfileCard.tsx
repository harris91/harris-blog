import CONFIG from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const getProfileImage = () => {
  const random = Math.ceil(Math.random()*CONFIG.profile.maxNum);
  return CONFIG.profile.randomImage + random + CONFIG.profile.ext;
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="p-2 rounded-md bg-white dark:bg-gray-800 mb-4">
        <div className="flex items-center gap-2">
          <Image
            src={getProfileImage()}
            width={90}
            height={90}
            alt="profile_image"
            className="relative"
          />
          <div className="h-fit dark:text-white">
            <div className=" text-xl  italic font-bold">
              {CONFIG.profile.name}
            </div>
            <div className="text-sm text-gray-500 mb-2 dark:text-gray-400">
              {CONFIG.profile.role}
            </div>
            <div className="text-sm">{CONFIG.profile.bio}</div>
          </div>
        </div>
        {/* <div className="flex">
          {CONFIG.profile.github && (
            <a
              href={`https://github.com/${CONFIG.profile.github}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-gray-800 rounded-md cursor-pointer text-gray-500 dark:text-white "
            >
              <AiOutlineGithub className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.instagram && (
            <a
              href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
              rel="noreferrer"
              target="_blank"
              className="p-3 dark:hover:bg-gray-800 rounded-md cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineInstagram className="text-2xl" />
            </a>
          )}
          {CONFIG.profile.email && (
            <a
              href={`mailto:${CONFIG.profile.email}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-gray-800 rounded-md cursor-pointer text-gray-500 dark:text-white"
            >
              <AiOutlineMail className="text-2xl flex-shrink-0" />
            </a>
          )}
          {CONFIG.profile.linkedin && (
            <a
              href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
              rel="noreferrer"
              target="_blank"
              className="  overflow-hidden p-3 dark:hover:bg-gray-800 rounded-md cursor-pointer text-gray-500 dark:text-white"
            >
              <AiFillLinkedin className="text-2xl flex-shrink-0" />
            </a>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default MobileProfileCard
