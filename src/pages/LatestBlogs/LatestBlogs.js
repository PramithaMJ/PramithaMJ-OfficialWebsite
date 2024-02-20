import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import img from '../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import { Blogs } from '../../data/BlogData';
import BlogComponent from './LatestBlogComponents';
import ParticleComponent from '../../subComponents/ParticleComponent';
import { DarkTheme } from '../../components/Themes';

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},1)`};
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
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},1)`};
  color: var(--white);
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
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
            <Title>Latest Blogs...</Title>
            
            <BlogContainer id='blog-container'>
              {Blogs.map((blog) => (
                <BlogComponent key={blog.id} blog={blog} />
              ))}
            </BlogContainer>
            <div>
              <ScrollButton onClick={() => scrollBlogs('left')}>{'<'}</ScrollButton>
              <ScrollButton onClick={() => scrollBlogs('right')}>{'>'}</ScrollButton>
            </div>
          </Center>
        </Container>
      </MainContainer>
      
    </ThemeProvider>
  );
};

export default LatestBlogs;
