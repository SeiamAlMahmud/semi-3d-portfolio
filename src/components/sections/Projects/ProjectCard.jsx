import React from 'react'
import styled from 'styled-components'



const Card = styled.div`
    width: 330px;   
    height: 490px;  
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    flex-direction: column;
    gap: 14px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`
const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px px rgba(0, 0, 0, 0.3);

`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0 2px;
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};

    @media screen and (max-width: 768px) {
    font-size: 12px;
    }
`

const Desc = styled.div`
    margin-top: 8px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;


    /* @media screen and (max-width: 768px) {
    font-size: 12px;
    } */
`


const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const Button = styled.div`
    color: ${({ theme }) => theme.secondary};
    text-decoration: none;
    font-weight: 600;
    text-align: center;
    border: 3px solid ${({ theme }) => theme.primary};
    width: 100%;
    margin: 0 auto;
    max-width: 200px;
    padding: 12px 12px;
    border-radius: 35px;
    transition: all 0.2s ease-in;
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 20px #1f2634;
    &:hover {
    background:  ${({ theme }) => theme.primary + 20};
    box-shadow:rgb(107, 114, 224) 7px 0px 50px;
    }
`





const ProjectCard = ({ project, isVisible }) => {
    return (
        <Card isVisible={isVisible}>
            <Image src={project?.image} />
            <Tags></Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Desc>{project.description}</Desc>
            </Details>
            <Members>
                {
                    project?.member?.map((member, idx) => {
                        return (
                            <Avatar src={member.img} />
                        )
                    })
                }
            </Members>
            <Button href={project.github} target="_blank"> View Code </Button>
        </Card>
    )
}

export default ProjectCard