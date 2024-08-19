import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components'
import { Bio } from "../data/constants"
import MenuIcon from '@mui/icons-material/Menu';





const Nav = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: white;
`

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
    `;

const NavLogo = styled.div`
    width: 80%;
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    `

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
  
    @media screen and (max-width: 768px) {
    display: none;
  }
  
    `

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
     color: ${({ theme }) => theme.primary};
    }
  
    `
const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: end;
    padding: 0 6px;
    align-items: center;
  
    @media screen and (max-width: 768px) {
    display: none;
  }
  
  `
const GithubButton = styled.a`
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover { 
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary};
  }
`

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  height: 100%;
  display: flex;
  align-items: center;
  display:none;

   @media screen and (max-width: 768px) {
    display: block;
  }

  `

const MobileMenu = styled.ul`
   width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 16px;
    list-style: none;
    width: 100%;
    flex-direction: column;
    padding: 12px 40px 24px 40px;
    background-color: ${({ theme }) => theme.card_light + 99};
    position: absolute;
    top: 80px;
    right: 0;


    transition: all 0.6s ease-in-out;
    transform: ${({isOpen})=> 
      isOpen ? "translateY(0)" : "translateY(-100%)"  
    };
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    opacity: ${({isOpen})=> ( isOpen ? "100%" : "0" )};
    z-index: ${({isOpen})=> ( isOpen ? "1000" : "-1000" )};

  `


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme();


  return (
    <Nav>
      <NavbarContainer>
        <NavLogo onClick={() => navigate("/")}>
          <p style={{ color: 'white', fontSize: '1.8rem' }}>Seiam</p>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon style={{ color: 'inherit' }} />
        </MobileIcon>

        <NavItems>
          <NavLink href={"#About"}>About </NavLink>
          <NavLink href={"#Skills"}>Skills </NavLink>
          <NavLink href={"#Experience"}>Experience </NavLink>
          <NavLink href={"#Projects"}>Projects</NavLink>
          <NavLink href={"#Education"}> Education</NavLink>
        </NavItems>

        {
          isOpen && <MobileMenu isOpen={isOpen}>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href={"#About"}>About </NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href={"#Skills"}>Skills </NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href={"#Experience"}>Experience </NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href={"#Projects"}>Projects</NavLink>
          <NavLink onClick={()=> setIsOpen(!isOpen)} href={"#Education"}> Education</NavLink>
          <GithubButton href={Bio.github} target='_blank' style={{
            background: theme.primary,
            color: theme.text_primary
          }}> Github</GithubButton>
          </MobileMenu>
        }

        <ButtonContainer>
          <GithubButton href={Bio.github} target='_blank'> Github</GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar