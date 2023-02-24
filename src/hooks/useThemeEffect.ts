import { useEffect } from "react"
import CONFIG from "site.config"
import { ThemeType } from "@custeomTypes/index"

export const getTheme: () => ThemeType = () => {
  let isDark = false;

  if(!("theme" in localStorage) && CONFIG.blog.theme === "auto") {
    isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  }
  else if(localStorage.theme === "dark" || (!("theme" in localStorage) && CONFIG.blog.theme === "dark")) {
    isDark = true
  } 
  
  
  return isDark ? "dark" : "light"
}

const useThemeEffect = () => {
  useEffect(() => {
    if (typeof document !== "object") return

    if (getTheme() === "dark") {
      document.documentElement.classList.add("dark")
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', CONFIG.blog.themeColor.dark);
    } else {
      document.documentElement.classList.remove("dark")
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', CONFIG.blog.themeColor.light);
    }
  }, [])
}

export default useThemeEffect
