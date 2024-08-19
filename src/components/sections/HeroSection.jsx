import React from 'react'
import styled from 'styled-components'
import { Bio } from "../../data/constants"
import TypeWriter from "typewriter-effect"
import HeroImg from "../../assets/bg-001.jpg"
import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'
import { headContainerAnimation, headTextAnimation, headContentAnimation } from "../../utils/motion"



const HeroContainer = styled.div`
 display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 80px 30px;


 @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`


const HeroInnerContainer = styled.div`
 position: relative; 
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 max-width: 1100px;
gao: 40px;
 @media screen and (max-width: 960px) {
 flex-direction: column;
  }
`


const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    gap:6px;
    @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
  `


const HeroRightContainer = styled.div`
  width: 100%;
   order: 2;
   display: flex;
   align-items: center;
   justify-content: end;

 @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    flex-direction: column;
   justify-content: center;

    }

     @media screen and (max-width: 640px) {
    margin-bottom: 30px;
    }
    
  `
const Title = styled.div`

   font-size: 50px;
   color: ${({ theme }) => theme.text_primary}; 
  line-height: 68px;
  font-weight: 700;
  @media screen and (max-width: 960px) {
    font-size: 40px;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  `
const span = styled.div`

   cursor: pointer;
 
  `

const TextLoop = styled.div`
  font-weight: 600;
   font-size: 40px;
   display: flex;
   gap: 0px;
   flex-direction: column;
   color: ${({ theme }) => theme.text_primary}; 
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  `

const Subtitle = styled.div`
   font-size: 20px;
   line-height: 32px;
   margin-bottom: 42px;
   color: ${({ theme }) => theme.text_primary + 95} ; 
 

  `

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 20px;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    // box-shadow:  20px 20px 60px #1F2634,
    box-shadow:rgb(107, 114, 224) 7px 0px 50px;
    filter: brightness(1);
    
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
  `

const Img = styled.img`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  max-width: 400px;
  max-height: 400px;
   border: 2px solid ${({ theme }) => theme.primary};
    box-shadow:rgb(107, 114, 224) 0px 0px 10px;
 
    

  @media screen and (max-width: 768px) {

  max-width: 280px;
  max-height: 280px;
    }

  `

const HeroBg = styled.div`
  position: absolute;
  display: flex;

  top: 50%;
  right: 0;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 100%;
  max-width: 1360px;
  justify-content: end;
  -webkit-transform: translateX(-50%), translateY(-50%);
  transform: translateX(-50%), translateY(-50%);

  `

const HeroSection = () => {
  return (
    <div id='About'>
      <HeroContainer>
        {/* <HeroBg>
        <HeroBgAnimation />
      </HeroBg> */}
        <motion.div {...headContainerAnimation}>

          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>Hi, I am <br /> {Bio.name} </Title>
                <TextLoop>
                  <p>I am a <br /></p>
                  <span style={{ color: "#854CE6" }}>
                    <TypeWriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,

                      }}
                    />
                  </span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <Subtitle> {Bio.description}</Subtitle>
              </motion.div>
              <ResumeButton>Check Button</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
            <motion.div {...headContentAnimation}>

              <Tilt>
                <Img src={HeroImg} alt="Rishaw Chanda" />
              </Tilt>
            </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  )
}

export default HeroSection