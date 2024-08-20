import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes'
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/sections/HeroSection';



const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.text_primary};
width: 100%;
overflow-x: hidden;
position: relative;
height: 90vh;
  `


function App() {
  document.title = "Homepage";
  const [count, setCount] = useState(0)

  return (
    <>

    <ThemeProvider theme={darkTheme}>
    <Navbar />
    <Body>
    <HeroSection />
    </Body>
    </ThemeProvider>
    </>
  )
}

export default App
