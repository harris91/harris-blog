// import Link from "next/link"
import { useRouter } from 'next/router'
import CONFIG from "site.config"
import { formatDate } from "@/src/libs/utils"
import Tag from "./Tag"
import { TPost } from "../types"
import Image from "next/image"

type Props = {
  post: TPost
}

const PostCard: React.FC<Props> = ({ post }) => {
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
          className="overflow-hidden mb-2 md:mb-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 "
        >
          {post.thumbnail && (
            <div className="relative w-full pb-[66%] lg:pb-[50%] bg-gray-200 dark:bg-gray-800 ">
              <Image
                src={post.thumbnail}
                className="object-cover"
                layout="fill"
                alt={post.title}
              />
            </div>
          )}
          <div className="py-4 px-2 md:px-4">
            <header className="flex flex-col justify-between md:flex-row md:items-baseline">
              <h2 className="text-xl md:text-2xl font-medium cursor-pointer text-black dark:text-gray-100 hover:font-semibold transition-all"
                onClick={() => readPost(post.slug)}>
                {post.title}
              </h2>
            </header>

            <div className="flex gap-2">
              {post.tags &&
                post.tags.map((tag: string, idx: number) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
            </div>
            
            <main className="my-2 md:my-3">
              <p className="leading-tight md:leading-8 text-sm md:text-base text-gray-700 dark:text-gray-400">
                {post.summary}
              </p>
            </main>
            <div className="flex items-center gap-2 mt-6 mb-2">
              {/* {post.author && post.author[0] && (
                <>
                  <div className="flex items-center gap-1">
                    <Image
                      className="rounded-full"
                      src={post.author[0].profile_photo}
                      alt="profile_photo"
                      loader={imageLoader}
                      width={20}
                      height={20}
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {`${post.author[0].last_name}${post.author[0].first_name}`}
                    </div>
                  </div>
                  <div className="self-stretch w-px my-1 bg-gray-300"></div>
                </>
              )} */}
              <div className="relative text-xs md:text-sm text-gray-500 dark:text-gray-400 w-full">
                {formatDate(
                  post?.date?.start_date || post.createdTime,
                  CONFIG.lang
                )}
                <span 
                  className="absolute top-0 right-0 cursor-pointer mr-1 mb-2 text-xs md:text-sm font-medium text-sky-500 hover:text-sky-600 dark:hover:text-sky-400"
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
