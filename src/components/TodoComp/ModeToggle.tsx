import { Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme">
        
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-orange-400"/>
      ) : (
        <Moon className="w-5 h-5 text-gray-500"/>
      )}
    </button>
  )
}

export default ModeToggle;
