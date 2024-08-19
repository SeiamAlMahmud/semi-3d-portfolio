import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ThemeProvider theme={darkTheme}>
    <Navbar />
    </ThemeProvider>
    </>
  )
}

export default App
