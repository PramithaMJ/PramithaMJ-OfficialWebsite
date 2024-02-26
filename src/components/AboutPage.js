import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'
import pmj from "../assets/mypic.png"
import GithubActivity from '../Sections/GithubActivity/GithubActivity';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: -3%;
right: -5%;
width: 50vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={pmj} alt="pramitha" />
        </Spaceman>    
        <Main>
       I am Pramitha Jayasooriya, a third-year undergraduate of the Faculty of Engineering,
       University of Ruhuna. I am reading for a BSc. (Hons.) Degree in Computer Engineering.
        I am very interested in computer programming, web development, and software development.
         I have done several projects related to software development and web development.
            I do my best to honor their commitment. In addition,
        I want to develop a positive outlook on life and strive to be a respected member of the society.
        <br /> <br/>
        Aspiring Computer Engineer with a specialized focus on Java and Spring technologies.
        <br/> <br/>
        I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        <br/> <br/>
        Unleashing the power of code to shape my life, one line at a time! 🚀
        </Main>

        <BigTitle text="ABOUT ME" top="10%" left="5%" />

        
        </Box>
<GithubActivity/>
        </ThemeProvider>
        
    )
}

export default AboutPage
