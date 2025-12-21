import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Recommendations } from '../data/RecommendationsData'

const Section = styled.section`
  min-height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.body};
  padding: 5rem 0;
`

const Title = styled.h1`
  font-size: calc(1.5rem + 1vw);
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`

const Carousel = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

const Card = styled(motion.div)`
  width: calc(15rem + 15vw);
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.body};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`

const Text = styled.p`
  font-size: calc(0.8rem + 0.3vw);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-style: italic;
`

const Name = styled.h3`
  font-size: calc(0.9rem + 0.3vw);
  font-weight: 600;
`

const Info = styled.h4`
  font-size: calc(0.7rem + 0.3vw);
  font-weight: 400;
  opacity: 0.8;
`

const RecommendationsSection = () => {
    return (
        <Section>
            <Title>Recommendations</Title>
            <Carousel>
                {Recommendations.map((item) => (
                    <Card key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Text>"{item.text}"</Text>
                        <div>
                            <Name>{item.name}</Name>
                            <Info>{item.title}</Info>
                            <Info>{item.company}</Info>
                        </div>
                    </Card>
                ))}
            </Carousel>
        </Section>
    )
}

export default RecommendationsSection
