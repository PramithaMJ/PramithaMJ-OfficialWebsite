import React, { lazy } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Tilt } from "react-tilt";

const Card = lazy(() => import("../../sectionComponents/Card/Card"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`;

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

const Carousal = styled.div`
  width: 80%; /* Adjusted width for better visibility */
  max-width: 1200px; /* Added max-width for responsiveness */
  margin: 0 auto; /* Center the carousel */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only Screen and (max-width: 40em) {
    width: 90%;
  }

  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }

  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }

  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about me!</Title>
      <Carousal>
        <Slider {...settings}>
          <Tilt>
          <Card
            text="I had the pleasure of being Pramitha Jaysooriya's lecturer of University of Ruhuna,
             where I witnessed firsthand their exceptional dedication and aptitude for programming. 
             Pramitha excels in core Java and the Spring framework, demonstrating an in-depth understanding 
             of these technologies.One notable strength is his proficiency in applying design patterns effectively.
              He consistently showcased a keen ability to implement design patterns in practical scenarios, 
              contributing to a robust and scalable codebase and he contribute the social through writing article of 
              medium wensite. Moreover, Pramitha stands out as a problem-solving enthusiast. He tackled complex challenges
               with a systematic and analytical approach, showcasing an impressive ability to navigate through intricate problem domains.
              In addition to technical prowess, He is a collaborative and hard-working engineering student. 
              He actively engages in team projects, fostering a positive and inclusive environment. 
              I am confident that Pramitha will excel in any professional setting. 
              Their positive mindset, coupled with a strong foundation in programming and design patterns, 
              makes them a valuable asset to any team."
            name="Dr.Prabath Weerasinghe (Ph.D)"
            image="avatar-1"
          />
</Tilt>
         
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
