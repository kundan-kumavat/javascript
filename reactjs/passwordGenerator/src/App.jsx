import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'
import { ThemeProvider } from './context/theme'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <UserContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContextProvider>
    </ThemeProvider>
    </>
  )
}

export default App
