import CONFIG from "site.config"
import { useEffect } from "react"
import { getTheme } from "@hooks/useThemeEffect"

//TODO: useRef?

type Props = {
  issueTerm: string
}

const Utterances: React.FC<Props> = ({ issueTerm }) => {
  useEffect(() => {
    const theme = `github-${getTheme()}`
    // 'github-dark'
    const script = document.createElement("script")
    const anchor = document.getElementById("comments")
    if (!anchor) return

    script.setAttribute("src", "https://utteranc.es/client.js")
    script.setAttribute("crossorigin", "anonymous")
    script.setAttribute("async", `true`)
    script.setAttribute("issue-term", issueTerm)
    script.setAttribute("theme", theme)
    const config: { [key: string]: string } = CONFIG.utterances.config
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key])
    })
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ""
    }
  })

  return (
    <>
      <div id="comments" className="max-w-full"></div>
    </>
  )
}

export default Utterances