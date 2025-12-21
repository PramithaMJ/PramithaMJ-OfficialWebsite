import React, { lazy } from "react";
import styled from "styled-components";
import { Tilt } from "react-tilt";
import avatarDummy from "../../assets/avatar-dummy.png";
import avatar1 from "../../assets/avatar-1.jpg";

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

const GridContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Testimonials = () => {
  return (
    <Section>
      <Title>Few good words about me!</Title>
      <GridContainer>
        <Tilt>
          <Card
            text="Pramitha is a diligent, hardworking person. I worked with him on a key project while he was interning at WSO2. He handled the whole project by himself, delivered on time and was open to suggestions and feedback. He did a great job! I’m sure he will do great in a long career he has in front of him. All the best, Pramitha!"
            name="Khushboo Sinha (Strategic Alliances @ WSO2)"
            image={avatarDummy}
          />
        </Tilt>
        <Tilt>
          <Card
            text="Pramitha Jayasooriya, a student of the Faculty of Engineering, University of Ruhuna, is a highly talented and hardworking developer who was instrumental in the success of the LifePill project. His technical skills and dedication were truly outstanding... He led the design and implementation of the project’s microservices architecture using Spring Boot, Spring Cloud, and RabbitMQ... I strongly recommend Pramitha for any role that values innovation, technical expertise, and unwavering dedication."
            name="Kushan Sudheera (Senior Lecturer)"
            image={avatarDummy}
          />
        </Tilt>
        <Tilt>
          <Card
            text="I had the pleasure of being Pramitha Jaysooriya's lecturer of University of Ruhuna, where I witnessed firsthand their exceptional dedication and aptitude for programming.  Pramitha excels in core Java and the Spring framework, demonstrating an in-depth understanding  of these technologies.One notable strength is his proficiency in applying design patterns effectively. He consistently showcased a keen ability to implement design patterns in practical scenarios,  contributing to a robust and scalable codebase and he contribute the social through writing article of  medium wensite. Moreover, Pramitha stands out as a problem-solving enthusiast. He tackled complex challenges with a systematic and analytical approach, showcasing an impressive ability to navigate through intricate problem domains. In addition to technical prowess, He is a collaborative and hard-working engineering student.  He actively engages in team projects, fostering a positive and inclusive environment.  I am confident that Pramitha will excel in any professional setting.  Their positive mindset, coupled with a strong foundation in programming and design patterns,  makes them a valuable asset to any team."
            name="Dr.Prabath Weerasinghe (Ph.D)"
            image={avatar1}
          />
        </Tilt>
      </GridContainer>
    </Section>
  );
};

export default Testimonials;
