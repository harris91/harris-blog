import CONFIG from "@/site.config"
import { ThemeType } from "@/src/types"
import { getTheme } from "@hooks/useThemeEffect"
import React, { useEffect, useState } from "react"
import { RiSunFill, RiMoonFill} from "react-icons/ri";

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window === "object") {
      setTheme(getTheme())
    }
  }, [])

  const handleClick = () => {
    // 상단 테마 변경
    document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('media', `(prefers-color-scheme:${getTheme()})`);
    
    // 전체 테마 변경
    const changedTheme = getTheme() !== "dark" ? "dark" : "light"
    localStorage.setItem("theme", changedTheme)
    setTheme(changedTheme)
    changedTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")

    //댓글창 Theme 변경
    if(CONFIG.utterances.enable) {
      const utterances = document.querySelector('iframe');
      if(utterances) {
        const message = {
          type: 'set-theme',
          theme: `github-${changedTheme}`
        }
        utterances?.contentWindow?.postMessage(message, 'https://utteranc.es')
      }
    }

  }

  if (CONFIG.blog.theme !== "auto") return null
  return (
    <div className={`cursor-pointer dark:text-gray-50`} onClick={handleClick}>
      {theme === "light" ? <RiSunFill/> : <RiMoonFill/>}
    </div>
  )

}

export default ThemeToggle
