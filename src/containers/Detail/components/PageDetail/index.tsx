import { NotionRenderer } from "react-notion-x"
import dynamic from 'next/dynamic'
import { TPost } from "@/src/types"
import React from "react"

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

const PageDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <div className="m-auto max-w-4xl">
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
  )
}

export default PageDetail
