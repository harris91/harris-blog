import { TPosts, TPostPublic, TPostType } from "@/src/types"

type Options = {
  acceptType?: TPostType[]
  publicType?: TPostPublic
}

const initialOption: Options = {
  acceptType: ["Post"],
  publicType: "Yes"
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, options: Options = initialOption) {
  const { acceptType = ["Post"], publicType} = options
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    //filter public checkbox
    .filter(post => {
      return post?.public === publicType
    })
    // filter type
    .filter((post) => {
      const postType = post.type[0]
      return acceptType.includes(postType)
    })
  return filteredPosts
}
