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
import BigTitle from "../subComponents/BigTitlte";
import ParticlesComponent from "../subComponents/ParticleComponent";
import Footer from "../sectionComponents/Footer/Footer";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  // hight: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column; /* Center content in a column */
`;

const Main = styled(motion.ul)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center content horizontally */
  gap: 5rem;
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

  const firstThreeCards = Work.slice(0,0);
  const remainingCards = Work.slice(0);

  return (
    <ThemeProvider theme={isSmallScreen ? DarkTheme : DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        {/* Conditionally render SocialIcons based on screen size */}
        {!isSmallScreen && <SocialIcons theme="light" />}
        {/* <PowerButton /> */}
        <ParticlesComponent theme="light" />
        <Main
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
          isSmallScreen={isSmallScreen}
        >
          {firstThreeCards.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Main
        variants={container}
        animate="show"
        initial = "hidden"
        >
          {remainingCards.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
        <BigTitle text="PROJECTS" top="10%" right="20%" />
      </Box>
      <Box>
        <Footer />
      </Box >
      {/* <Footer  /> */}
    </ThemeProvider>
  );
};

export default WorkPage;
