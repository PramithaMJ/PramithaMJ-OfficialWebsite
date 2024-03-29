import React, { useEffect, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'
import {DarkTheme, lightTheme} from "./Themes";
import ParticleComponent from "../subComponents/ParticleComponent";

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},1)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  }

  // Add media query for smaller screens
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 10vw), 1fr));
    grid-gap: 1rem;
  }
`;

const SocialIconsContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const container = {
  hidden: {opacity:0},
  show: {
    opacity: 1,
    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
          opacity: 0, transition: {duration: 0.5}
        }}
      >
        <Container>
          <ParticleComponent />
          <LogoComponent />
          <PowerButton />
          <SocialIconsContainer>
            <SocialIcons />
          </SocialIconsContainer>
          <AnchorComponent number={numbers}/>
          <Center>
            <Grid>
              {
                Blogs.map(blog => {
                  return <BlogComponent key={blog.id} blog={blog} />
                })
              }
            </Grid>
          </Center>
          <BigTitle text="BLOGS" top="5rem" left="5rem" />
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default BlogPage;
