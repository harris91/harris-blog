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
      <a aria-label={CONFIG.blog.title} onClick={clickLogo}>
        <div className="flex items-center">
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
          <div className="ml-1 text-black dark:text-white header-name text-2xl font-bold">
            {CONFIG.blog.title}
          </div>
        </div>
      </a>
    // </Link>
  )
}

export default Logo
