//This is home page, It will contains all the sections require in this page.

//Import all the require sections here

import styled from "styled-components";
import HeroSection from "../../Sections/Hero";
import About from "../../Sections/About";
import Services from "../../Sections/Services";
import Testimonials from "../../Sections/Testimonials";
import Contact from "../../Sections/Contact";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const MHome = () => {
    return (
        <Container>
            <HeroSection />
            <About />
            <Services />
            {/*<Testimonials />*/}
            <Contact />
        </Container>
    );
};

export default MHome;
