import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';


const Box = styled(motion.li)`
  width: ${(props) => (props.isSmallScreen ? "100%" : "24rem")};
  height: 60vh;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    border-radius: 0;
    padding: 1rem; /* Adjust padding for smaller screens */
  }

  &:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${props => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${props => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;

  ${Box}:hover & {
    & > * {
      fill: ${props => props.theme.text};
    }
  }
`;

// Framer motion configuration
const Item = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5,
        },
    },
};

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; /* Adjust as needed */
`;

const Card = (props) => {
    const { id, name, image, description, tags, demo, github } = props.data;

    return (
        <Box
            key={id}
            variants={{
                hidden: { scale: 0, rotate: 0 }, // Initial state
                show: { scale: 1, rotate: 0 }, // State when visible or hovered
            }}
            whileHover={{ rotate: 0 }}
        >
            <Title>{name}</Title>
            <Image src={image} alt={`${name} Image`} />
            <Description>{description}</Description>
            <Tags>
                {tags.map((t, id) => (
                    <Tag key={id}>#{t}</Tag>
                ))}
            </Tags>
            <Footer>
                <Link href={demo} target="_blank">
                    Visit
                </Link>
                <Git href={github} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    );
};

export default Card;
