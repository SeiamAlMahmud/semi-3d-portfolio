import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes'
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/sections/Hero/HeroSection';
import Skills from './components/sections/skills/Skills';
import Experience from './components/sections/Experience/Experience';
import Education from './components/sections/EduCard/Education';
import Projects from './components/sections/Projects/Projects';




const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
  `

const Wrapper = styled.div`
padding-bottom: 100px;
padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  document.title = "Homepage";
  const [count, setCount] = useState(0)

  return (
    <>

      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <div>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
            </Wrapper>
          </div>
        </Body>

      </ThemeProvider>
    </>
  )
}

export default App
