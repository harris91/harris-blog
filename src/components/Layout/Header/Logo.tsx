import React, {Fragment, useState} from "react"
import { useRouter } from 'next/router'
import { useTimeoutFn } from 'react-use'
import CONFIG from "site.config"
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import profile from 'public/emoji/profile.png'


type Props = {}

const Logo: React.FC<Props> = () => {
  const router = useRouter();
  
  const clickLogo = () => {
    if(location.pathname === '/') location.reload();
    else router.push('/');
  }
  
  let [isShowing, setIsShowing] = useState(false)
  useTimeoutFn(() => setIsShowing(true), 500)

  return (
      <span aria-label={CONFIG.blog.title} onClick={clickLogo}>
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[1500ms]"
          enterFrom="opacity-0 translate-y-2"
          enterTo="opacity-100 translate-y-0"
        >
        <div className="flex items-center cursor-pointer">
            <div className="mt-1">
              <Image
                src={profile}
                alt="avatar"
                width={40}
                height={40}
                placeholder="blur"
                className="h-10 w-10 rounded-full"
              />
            </div>
          <div className="ml-1 text-black dark:text-white text-xl font-bold">
            {CONFIG.blog.title}&nbsp;
            <span className="invisible sm:visible text-sm font-normal">블로그</span>
          </div>
        </div>
        </Transition>
      </span>
  )
}

export default Logo
