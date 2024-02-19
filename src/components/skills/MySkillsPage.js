import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme, lightTheme } from '../Themes';
import { Design, Develope } from '../AllSvgs';

import LogoComponent from '../../subComponents/LogoComponent';
import SocialIcons from '../../subComponents/SocialIcons';
import PowerButton from '../../subComponents/PowerButton';
import ParticleComponent from '../../subComponents/ParticleComponent';
import BigTitle from '../../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
//   height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 90vw; /* Adjusted width for smaller screens */
  max-width: 600px; /* Added max-width for larger screens */
  margin: 1rem; /* Added margin for spacing between Main components */
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="light" />
                <SocialIcons theme="light" />
                <PowerButton />
                <ParticleComponent theme="light" />

                <Main>
                    <Title>
                        <Design width={40} height={40} /> Backend Developer
                    </Title>
                    <Description>
                        <ul>
                            <li>
                                Web Development
                                <ul>
                                    <li>Spring Framework</li>
                                    <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                                </ul>
                            </li>
                            <li>
                                Mobile Apps Development
                                <ul>
                                    <li>Flutter</li>
                                    <li>Kotlin</li>
                                </ul>
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>IntelliJ IDEA</li>
                            <li>Android Studio</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </Description>
                </Main>

                <Main>
                    <Title>
                        <Design width={40} height={40} /> Frontend Developer
                    </Title>
                    <Description>
                        <ul>
                            <li>
                                Web Development
                                <ul>
                                    <li>Next Js</li>
                                    <li>React Js</li>
                                </ul>
                            </li>
                            <li>
                                Mobile Apps Development
                                <ul>
                                    <li>Flutter</li>
                                </ul>
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>IntelliJ IDEA</li>
                            <li>Android Studio</li>
                            <li>Visual Studio Code</li>
                        </ul>
                    </Description>
                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    );
};

export default MySkillsPage;
