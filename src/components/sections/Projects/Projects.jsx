import React, { useState } from 'react'
import styled from "styled-components"
import { projects } from '../../../data/constants'
import ProjectCard from './ProjectCard'
import StarCanvas from "../../canvas/Stars"




const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin: 40px 0;
  padding: 16px 0;
`
const Wrapper = styled.div`

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    }
`
const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
    }
`
const Desc = styled.div`
    font-size: 20px;
    text-align: center; 
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 40px;
`
const ToggleButtonGroup = styled.div`
    display: flex;
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 960px) {
    font-size: 16px;
    }
    @media screen and (max-width: 435px) {
    flex-direction: column;
    padding: 0 28px ;
    }

`

const ToggleButton = styled.div`
    border-radius: 6px;
    padding: 8px 18px;
    cursor: pointer;
    transition: all ease;
    ${({ active, theme }) => active &&
        `
        background: linear-gradient(to top, #844ce63d, transparent);
        `
    }
    color: ${({ active, theme }) => active && theme.text_primary};
    &:hover {
        background: linear-gradient(to top, ${({ theme }) => theme.primary + 60}, transparent);
        color: ${({ theme }) => theme.text_primary}
    }
    
    @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
    }
    ${({ active, theme }) => active &&
        `
        background: ${({ theme }) => theme.primary + 20};
        `
    }
     @media screen and (max-width: 435px) {
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    justify-content: center;
   
    }

`

const Dividar = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`
const ToggleCardcontainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`



const Projects = () => {


    const [toggle, setToggle] = useState("all")


    return (
        <Container id="Projects">
            <StarCanvas />
            <Wrapper>
                <Title>Projects</Title>
                <Desc>I have worked on a wide range of Projects. From Web Applicaton to App Application. Here are some of Projects.</Desc>
                <ToggleButtonGroup>
                    <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}> All </ToggleButton>
                    <Dividar />
                    <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}> Web Apps </ToggleButton>
                    <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}> Android App </ToggleButton>
                    <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}> Machine Learning </ToggleButton>
                </ToggleButtonGroup>
                <ToggleCardcontainer>
                    {
                        projects.map((project, index) => {

                            return (
                                <ProjectCard
                                    key={index}
                                    project={project}
                                    isVisible={
                                        toggle === 'all' || project.category === toggle
                                    }
                                />
                            )

                        })
                    }
                </ToggleCardcontainer>
            </Wrapper>
        </Container>
    )
}

export default Projects