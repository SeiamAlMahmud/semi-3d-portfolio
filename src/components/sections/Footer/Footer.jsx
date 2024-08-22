import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../../data/constants'
import { FacebookRounded, LinkedIn } from '@mui/icons-material'




const FooterContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    background-color: #000000ad;
`

const Footerwrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
`

const Logo = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
`

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    width: 100px;
    max-width: 800px;
    gap: 2rem;
    justify-content: center;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        font-size: 12px;
        transition: color 0.2s ease-in-out;
    }
`

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
            color: ${({ theme }) => theme.text_primary};
         }

         @media (max-width: 768px) {

        font-size: 1rem;
    }
`

const Divider = styled.hr`
    width: 100%;
    height: 2px;
    color: ${({ theme }) => theme.primary};
`

const SocialMediaIcons = styled.div`
    display: flex;
    margin-top: 1rem;
`
const SocialMediaIcon = styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size:  1.5rem;
    text-decoration: none;
    color: ${({theme})=> theme.text_primary};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({theme})=> theme.primary };
    }
`

const Footer = () => {
    return (
        <>
            <Divider />
            <FooterContainer>
                <Footerwrapper>
                    <Logo>Seiam Al Mahmud</Logo>
                    <Nav>
                        <NavLink href={"#About"}>About </NavLink>
                        <NavLink href={"#Skills"}>Skills </NavLink>
                        <NavLink href={"#Experience"}>Experience </NavLink>
                        <NavLink href={"#Projects"}>Projects</NavLink>
                        <NavLink href={"#Education"}> Education</NavLink>
                    </Nav>
                    <SocialMediaIcons>
                        <SocialMediaIcon href={Bio.facebook} target="displau">
                            <FacebookRounded />
                        </SocialMediaIcon>
                        <SocialMediaIcon href={Bio.linkedin}  target="display">
                            <LinkedIn />
                        </SocialMediaIcon>
                    </SocialMediaIcons>
                </Footerwrapper>
            </FooterContainer>
        </>
    )
}

export default Footer