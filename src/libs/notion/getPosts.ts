import CONFIG from "site.config"
import { NotionAPI } from "notion-client"
import { idToUuid } from "notion-utils"
import getAllPageIds from "./getAllPageIds"
import getPageProperties from "./getPageProperties"
import { TPosts } from "@/src/types"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

export async function getPosts() {
  let id = CONFIG.notionConfig.pageId as string
  const api = new NotionAPI()
  const response = await api.getPage(id)
  id = idToUuid(id)
  const collectionValue = Object.values(response.collection)[0]?.value as any
  const collection = collectionValue?.value ?? collectionValue
  const block = response.block
  const blockValue = (block[id].value as any)?.value ?? block[id].value
  const rawMetadata = blockValue
  const schema = collection?.schema


  // Check Type
  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    return []
  } else {
    // Construct Data
    const pageIds = getAllPageIds(response)
    const data = []
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = (await getPageProperties(id, block, schema)) || null
      // Add fullwidth, createdtime to properties
      const pageBlockValue = (block[id].value as any)?.value ?? block[id].value
      properties.createdTime = new Date(
        pageBlockValue?.created_time
      ).toString()
      properties.fullWidth =
        (pageBlockValue?.format as any)?.page_full_width ?? false

      data.push(properties)
    }

    // Sort by date
    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime)
      const dateB: any = new Date(b?.date?.start_date || b.createdTime)
      return dateB - dateA
    })

    // Sort Tags 태그 정렬
    data.map(post => {
      if(post.tags) post = post.tags.sort()
      return post;
    })

    return data as TPosts
  }
}
