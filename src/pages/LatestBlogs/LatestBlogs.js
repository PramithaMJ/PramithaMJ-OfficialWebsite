import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import img from '../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import { Blogs } from '../../data/BlogData';
import BlogComponent from './LatestBlogComponents';
import ParticleComponent from '../../subComponents/ParticleComponent';
import { DarkTheme } from '../../components/Themes';
import { Tilt } from 'react-tilt';

const MainContainer = styled(motion.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: transparent;
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`;

const BlogContainer = styled.div`
  overflow-x: auto;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  justify-content: center;

  /* Hide scrollbar */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  -ms-overflow-style: none; /* IE and Edge */

  /* Show scrollbar on hover */
  &:hover {
    scrollbar-color: auto auto;
    -ms-overflow-style: scrollbar;
  }

  /* Webkit (Chrome, Safari, Opera) */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const ScrollButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
   border: 1px solid black;
   padding: 1rem;  // Increase padding to make the button larger
  font-size: 1rem;  // Increase font size for a larger button
  border-radius: 50%;  // Make the button round  
  &:hover {
    background-color: black;  
    color: white;            
    border: 1px solid white;  
    cursor: pointer;
    scale: 1.1;

  }
`;

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

const LatestBlogs = () => {
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

  const scrollBlogs = (direction) => {
    const container = document.getElementById('blog-container');
    const scrollAmount = 300;
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <ThemeProvider theme={DarkTheme}>
          {/* <ParticleComponent /> */}
      <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
        
          <Center>
            <Tilt>
            <Title>Latest Blogs...</Title>
            </Tilt>
            
            <BlogContainer id='blog-container'>
              {Blogs.map((blog) => (
                <Tilt>
                <BlogComponent key={blog.id} blog={blog} />
                </Tilt>
              ))}
            </BlogContainer>
          
            <div>
              <Tilt>
              <ScrollButton onClick={() => scrollBlogs('left')}>{'<'}</ScrollButton>
              <span> </span>
              <ScrollButton onClick={() => scrollBlogs('right')}>{'>'}</ScrollButton>
              </Tilt>
            </div>
          </Center>
        </Container>
      </MainContainer>
      
    </ThemeProvider>
  );
};

export default LatestBlogs;
