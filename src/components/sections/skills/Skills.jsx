import React from 'react'
import styled from "styled-components"
import { skills } from '../../../data/constants'
import { Tilt } from 'react-tilt'
import StarCanvas from "../../canvas/Stars"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-bottom: 40px;
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
const SkillsCotainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top:20px;
    gap: 50px;
    justify-content: center;

  `
const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;

  @media screen and (max-width: 768px) {
    max-width: 330px;
    padding: 10px 36px;
  }
  @media screen and (max-width: 430px) {
    max-width: 320px;
  }

  `
const SkillTitle = styled.p`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.primary};

`
const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`

const SkillItem = styled.div`
font-size: 16px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 80};
border: 1px solid ${({ theme }) => theme.text_primary + 80};
border-radius: 12px;
padding: 12px 16px;
display: flex;
align-items: center;
justify-content: center;
gap: 8px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }

  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
    }

`

const SkillImg = styled.img`
    width:24px;
    height: 24px;
`


const Skills = () => {
    return (
        <Container id="Skills">
            {/* <StarCanvas /> */}
            <Wrapper>
                <Title>Skills</Title>
                <Desc>
                    Here are some of my skills on which I have been within past 1.5 years.
                </Desc>
                <SkillsCotainer>
                    {
                        skills.map((skill, idx) => {
                            return (
                                <Tilt>
                                    <Skill key={idx}>
                                        <SkillTitle>{skill.title}</SkillTitle>
                                        <SkillList>{skill?.skills?.map((item, index) => {
                                            return (
                                                <SkillItem key={index}>
                                                    <SkillImg src={item.image} />
                                                    {item.name}
                                                </SkillItem>
                                            )
                                        })}</SkillList>
                                        
                                </Skill>
                                </Tilt>
                )
                        })
                    }
            </SkillsCotainer>
        </Wrapper>
        </Container >
    )
}

export default Skills