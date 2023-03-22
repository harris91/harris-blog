// import Link from "next/link"
import { useRouter } from 'next/router'
import CONFIG from "site.config"
import { formatDate, formatDateObject } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"
import { useState } from 'react'

type Props = {
  post: TPost
}
const getDefaultTumbnail = function(date:any) {
  const dateObj = formatDateObject(date);
  return (
    <div className="text-center flex justify-center items-center h-full">
      <div className="thumb-text">
        <span className="font-extrabold text-5xl md:text-7xl">
          {dateObj.day}
        </span>
        <br/>
        <span className="text-sm sm:text-base">
          {dateObj.month}, {dateObj.year}
        </span>
      </div>
    </div>
  )
}

const PostCard: React.FC<Props> = ({ post }) => {
  const [isHoverTitle, setHoverTitle] = useState<boolean>(false);	// 메뉴접기 상태
  
  const router = useRouter()
  const readPost = (slug: string) => {
    router.push(`/${slug}`)
  }
  

  // if (post.thumbnail) {}
  return (
    // <Link href={`/${post.slug}`}>
      <span>
        <article
          key={post.id}
          className="overflow-hidden my-2 sm:py-2 px-4 border-b border-gray-200 dark:border-gray-700 sm:grid sm:grid-cols-5 sm:gap-4"
        >
            <div className="hidden sm:block relative my-auto h-0 w-[100%] pb-[100%] sm:col-span-1 cursor-pointer border border-gray-200 dark:border-gray-800 rounded-lg"
              onClick={() => readPost(post.slug)}
              onMouseEnter={() => {setHoverTitle(true)}}
              onMouseLeave={() => {setHoverTitle(false)}}
            >
            {post.thumbnail ? (
              <Image
                src={post.thumbnail}
                className="object-cover rounded-lg"
                layout="fill"
                alt={post.title}
                loading="lazy"
              />
            ):(
              <div className="absolute left-0 top-0 w-full h-full bg-gray-400/20 dark:bg-gray-800/30  rounded-lg">
                {getDefaultTumbnail(post?.date?.start_date)}
              </div>
            )}
                  
            {/* <div className={`
                ${!isHoverTitle? "opacity-0" : "bg-gray-900 bg-opacity-80 "}
                absolute left-0 top-0 w-full h-full transition-all duration-500 text-white
            `}>
            {post?.date?.start_date}
            </div> */}

          </div>
          <div className="py-4 px-2 md:px-4 sm:col-span-4">
              <div className="flex gap-2">
                {post.tags &&
                  post.tags.map((tag: string, idx: number) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
              </div>
              <header className="flex flex-col justify-between md:flex-row md:items-baseline">
                <h2 className="text-xl md:text-[21px] cursor-pointer dark:text-gray-100 font-bold hover:font-extrabold transition-all"
                  onClick={() => readPost(post.slug)}
                  onMouseEnter={() => {setHoverTitle(true)}}
                  onMouseLeave={() => {setHoverTitle(false)}}
                  >
                  {post.title}
                </h2>
              </header>
              <main className="my-2 md:my-3">
                <p className="leading-tight md:leading-8 text-sm md:text-[15px] dark:text-gray-400 font-normal">
                  {post.summary}
                </p>
              </main>
              <div className="flex items-center gap-2 mt-6 mb-2">
                <div className="relative text-xs md:text-sm text-gray-500 dark:text-gray-400 w-full">
                  {formatDate(
                    post?.date?.start_date || post.createdTime,
                    CONFIG.lang
                  )}
                  <span 
                    className="absolute top-0 right-0 cursor-pointer mr-1 mb-2 text-xs md:text-sm font-light text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
                    onClick={() => readPost(post.slug)}>
                    Read more →
                  </span>
              </div>
            </div>
          </div>
        </article>
      </span>
    // </Link>
  )
}

export default PostCard
