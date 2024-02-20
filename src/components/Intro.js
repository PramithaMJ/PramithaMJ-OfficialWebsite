// Intro.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me2 from '../assets/Images/MyNew_bg.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 1200px;
  height: 55vh;
  display: flex;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.body} 50%,
    ${(props) => props.theme.text} 50%
  ) bottom,
  linear-gradient(
    to right,
    ${(props) => props.theme.body} 50%,
    ${(props) => props.theme.text} 50%
  ) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.text} 50%,
      ${(props) => props.theme.body} 50%
    ) bottom,
    linear-gradient(
      to right,
      ${(props) => props.theme.text} 50%,
      ${(props) => props.theme.body} 50%
    ) top;
    border-left: 2px solid ${(props) => props.theme.text};
    border-right: 2px solid ${(props) => props.theme.body};
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    order: 1;
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Pramitha Jayasooriya.</h3>
          <h6>A Passionate Full Stack Developer from Sri Lanka.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Image src={Me2} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
