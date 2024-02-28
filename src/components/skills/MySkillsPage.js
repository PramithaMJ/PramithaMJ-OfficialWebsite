import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from '../Themes';
import SkillCard2 from '../../pages/Card/card';
import ParticlesComponent from '../../subComponents/ParticleComponent';

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>  
      <ParticlesComponent theme="dark" />
            <SkillCard2/>
        </ThemeProvider>
    );
};

export default MySkillsPage;
