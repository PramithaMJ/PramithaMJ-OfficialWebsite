import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, lightTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import ParticlesComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: ${(props) => (props.isSmallScreen ? "0" : "calc(5rem + 5vw)")};
  display: flex;
  color: white;

  /* Adjust the styling for small screens */
  flex-direction: ${(props) => (props.isSmallScreen ? "column" : "row")};
`;


const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};


const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(
      window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (isSmallScreen) {
        // On small screens, scroll vertically
        element.style.transform = `translateY(${-window.pageYOffset}px)`;
        yinyang.current.style.transform = `rotate(${window.pageYOffset}deg)`;
      } else {
        // On large screens, scroll horizontally
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
        yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
      }
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, [isSmallScreen]);

  return (
      <ThemeProvider theme={isSmallScreen ? lightTheme : DarkTheme}>
        <Box>
          <LogoComponent theme="dark" />
          {/* Conditionally render SocialIcons based on screen size */}
          {!isSmallScreen && <SocialIcons theme="light" />}
          <PowerButton />
          <ParticlesComponent theme="light" />
          <Main
              ref={ref}
              variants={container}
              initial="hidden"
              animate="show"
              isSmallScreen={isSmallScreen}
          >
            {Work.map((d) => (
                <Card key={d.id} data={d} />
            ))}
          </Main>
          <Rotate ref={yinyang}>
            <YinYang width={80} height={80} fill={DarkTheme.text} />
          </Rotate>

          <BigTitlte text="WORK" top="10%" right="20%" />
        </Box>
      </ThemeProvider>
  );
};

export default WorkPage;
