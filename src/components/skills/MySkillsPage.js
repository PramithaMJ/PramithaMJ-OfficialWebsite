import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from '../Themes';
import SkillCard2 from '../../pages/Card/card';
import ParticlesComponent from '../../subComponents/ParticleComponent';
    const Title = styled.h1`
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
    &::before {
      content: '';
      height: 1px;
      width: 50%;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0.5rem);
      border-bottom: 2px solid var(--pink);
    
    }
  `;

  const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},1)`};
`;

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>  
      <ParticlesComponent theme="dark" />
       <Center>
      <Title>My Skills...</Title>
      </Center>
            <SkillCard2/>
        </ThemeProvider>
    );
};

export default MySkillsPage;
