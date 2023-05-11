import { NotionRenderer } from "react-notion-x"
import dynamic from 'next/dynamic'
import { TPost } from "@/src/types"
import React from "react"
import PostHeader from "./PostHeader"
import Footer from "./PostFooter"
import CommentBox from "./CommentBox"

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "")
}

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code as any)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection as any
  )
)
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(
    (m) => m.Equation as any
  )
)
const Pdf = dynamic(
  () =>
    import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf as any),
  {
    ssr: false,
  }
)
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then(
      (m) => m.Modal as any
    ),
  {
    ssr: false,
  }
)

type Props = {
  blockMap: any
  data: TPost
}

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <div
      className={`m-auto max-w-7xl py-3`}
    >
      <article className="m-auto max-w-4xl">
        {data.type[0] === "Post" && <PostHeader data={data} />}
        {blockMap && (
          <div className="mt-4">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                Code,
                Collection,
                Equation,
                Modal,
                Pdf,
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
        {data.type[0] === "Post" && (
          <>
            <Footer data={data} />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </div>
  )
}

export default PostDetail
