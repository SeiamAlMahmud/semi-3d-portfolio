import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import styled from 'styled-components'
import { experiences } from '../../../../data/constants'
import ExperienceCard from './ExperienceCard'




const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin: 40px 0;
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




const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experiences</Title>
        <Desc>
        My work experience includes software development, where I have worked on various projects for different companies.
        </Desc>
        <VerticalTimeline>
          {
            experiences.map((experience, idx) => {
              return (
                <ExperienceCard 
                key={`experience-${idx}`} 
                experience={experience}
                 />
              )
            })
          }
        </VerticalTimeline>
      </Wrapper>
    </Container>
  )
}

export default Experience