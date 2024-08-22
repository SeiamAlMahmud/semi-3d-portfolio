import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'



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

const ContactFrom = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255,255,255,0.125);
    padding: 32px;
    border-radius: 12px;
    margin-top: 28px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
    gap: 12px;
    `

const ContactTitle = styled.p`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 60};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;

    &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    }

`

const ContactButton = styled.input`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%,50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    color: ${({ theme }) => theme.text_primary};
    border: none;
    font-size: 18px;
    font-weight: 600;
    margin-top: 18px;
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: rgba(23, 92, 230, 0.919) 0px 4px 20px;
    }
    
    `

const ContactTextArea = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 60};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    resize: none;
`


const Contact = () => {

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_KEY, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
          alert("Succesfully Sent mail")
        },
        (error) => {
          console.log('FAILED...', error.text, error);
        },
      );
  }

  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          Feel free to reach out to me for any question or opportunities.
        </Desc>
        <ContactFrom ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me</ContactTitle>

          <ContactInput type='email' placeholder='Your Email' name='from_email' required />
          <ContactInput type='text' placeholder='Your Name' name='from_name' required />
          <ContactInput type='text' placeholder='Your Subject' name='subject' required />
          <ContactTextArea  placeholder='Your Email' name='from_email' rows={4} required />
          <ContactButton type='submit' value="Send" />
        </ContactFrom>

      </Wrapper>
    </Container>
  )
}

export default Contact