//This is home page, It will contains all the sections require in this page.

//Import all the require sections here

import styled from "styled-components";
import HeroSection from "../../Sections/Hero";
import About from "../../Sections/About";
import Services from "../../Sections/Services";
import Testimonials from "../../Sections/Testimonials";
import Contact from "../../Sections/Contact";
import BlogPage from "../../components/BlogPage";
import LatestBlogs from "../LatestBlogs/LatestBlogs";
import ParticlesComponent from "../../subComponents/ParticleComponent";
import Card2 from "../Card/card";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;


const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`;

const MHome = () => {
    return (
      <>
        {/* <ParticlesComponent /> */}
        <Container>
          
            <HeroSection />
            <About />
            <Services />
            {/* <Testimonials /> */}
            {/* <Title>Latest Blogs...</Title> */}
            {/* <LatestBlogs /> */}
            {/* <Contact /> */}
        </Container>
      </>
    );
};

export default MHome;
