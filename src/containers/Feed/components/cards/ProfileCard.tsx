import CONFIG from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const getProfileImage = () => {
  if(CONFIG.profile.isRandom) {
    const random = Math.ceil(Math.random()*CONFIG.profile.maxNum)
    return CONFIG.profile.randomImage + random + CONFIG.profile.ext
  } 
  else {
    return CONFIG.profile.image
  }
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="w-full md:p-4 lg:p-4 rounded-md dark:bg-gray-800 mb-4">
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <Image src={getProfileImage()} layout="fill" alt="" />
        </div>
        <div className="p-2 flex flex-col items-center dark:text-white">
          <div className=" text-xl italic font-bold">{CONFIG.profile.name}</div>
          <div className="text-sm mb-4 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
