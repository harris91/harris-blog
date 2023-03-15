import React from "react"
import { useRouter } from 'next/router'
import Link from "next/link"
import CONFIG from "site.config"

import Image from 'next/image'
import profile from 'public/emoji/profile3.png'

type Props = {}

const Logo: React.FC<Props> = () => {
  const router = useRouter();
  
  const clickLogo = () => {
    if(location.pathname === '/') location.reload();
    else router.push('/');
  }

  return (
    // <Link href="/">
      <span aria-label={CONFIG.blog.title} onClick={clickLogo}>
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
      </span>
    // </Link>
  )
}

export default Logo
