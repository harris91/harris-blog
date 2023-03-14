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

      // 자동 테마 (localStorage에 설정된 정보가 없느 경우)
      window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        if(!("theme" in localStorage)) {
          const changedTheme = event.matches ? "dark" : "light";
          setTheme(changedTheme);
          setThemeClass(changedTheme)
          console.log("Changed System Theme: ", changedTheme); // "dark" or "light"
        }
      });
    }
  }, [])

  const setThemeClass = (changedTheme:ThemeType) => {
    changedTheme === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark")

    // 상단 테마 변경
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', CONFIG.blog.themeColor[changedTheme]);
  }

  const handleClick = () => {
    // 전체 테마 변경
    const changedTheme = getTheme() !== "dark" ? "dark" : "light"
    localStorage.setItem("theme", changedTheme)
    setTheme(changedTheme)
    setThemeClass(changedTheme)
    
    //댓글창 Theme 변경
    if(CONFIG.utterances.enable) {
      const utterances = document.querySelector('iframe');
      if(utterances) {
        const message = {
          type: 'set-theme',
          theme: `github-${changedTheme}`
        }
        utterances.contentWindow?.postMessage(message, 'https://utteranc.es')
      }
    }
  }

  if (!CONFIG.blog.themeToggle) return null;
  return (
    <div 
      className={`cursor-pointer dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all p-2 rounded-full`} 
      onClick={handleClick}>
        {theme === "light" ? <RiSunFill/> : <RiMoonFill/>}
    </div>
  )
}

export default ThemeToggle
