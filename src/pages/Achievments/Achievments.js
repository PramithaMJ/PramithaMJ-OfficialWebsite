import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { DarkTheme } from '../../components/Themes';
import styled, {ThemeProvider} from 'styled-components';
import { motion } from 'framer-motion';
import img from "../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import ParticlesComponent from '../../subComponents/ParticleComponent';

const MainContainer = styled(motion.div)`
background-image: transparent;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-image: transparent;
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 5rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  }
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

const MyVerticalTimeline = () => {
  return (
    <>
     
      <ThemeProvider theme={DarkTheme}>  
     
        <MainContainer
          variants={container}
          initial='hidden'
          animate='show'
          exit={{
              opacity:0, transition:{duration: 0.5}
          }}
        > 
         <Center>
            <Title>Exposing My Odyssey throught Competitive Ventures...</Title>
            </Center>  
          <Container>
            <VerticalTimeline>
              <ParticlesComponent theme="light" />

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                date="2018 - present"
                contentArrowStyle={{ borderRight: "7px solid  #232631" }}
     
      
                
              >
                <div style={{ color: '#6B3E99' }}>

                <h3 className="vertical-timeline-element-title">Ranking No. 1 In Kattis</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">Competitive Programming</h4>
                <p>
                  1st place in Sri Lanka, according to Kattis website ranking (2023/02/09)
                </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>
                <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">HackerRank</h4>
               <p className="description">
                  5th Star with Gold Batch in HackerRank.
                </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>
                <h3 style={{ color: '#6B3E99' }} className="vertical-timeline-element-title">HaXtream 2.0</h3>
                <br/>
                <h4 style={{ color: '#6B3E99' }} className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna</h4>
                <p style={{ color: '#6B3E99' }}>
                 OUR Team Brainleft at the HaXtreme 17.0 2023 competition secured the 5th position at the University of Ruhuna.
                </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>
                <h3 className="vertical-timeline-element-title">IEE Xtreme 17.0</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE</h4>
                <p>
                 OUR Team Brainleft at the IEEE Xtreme 17.0 2023 competition secured the 3rd position at the University of Ruhuna and ranked 90th in the national standings for Sri Lanka.
                </p>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>

                <h3 className="vertical-timeline-element-title">MoraXtreme</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">UOM, Sri Lanka</h4>
                <p>
                 OUR Team Brainleft participated in 12 hour hackathon organized by University of Moratuwa.
                </p>
                </div>
              </VerticalTimelineElement>

               <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>
                <h3 className="vertical-timeline-element-title">Eminence 3.0 - 2023</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna ,WIE</h4>
                <p>
                As a member of Team TechSpark, achieved 6th place at Eminence 3.0
                </p>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                
              >
                <div style={{ color: '#6B3E99' }}>
                <h3 className="vertical-timeline-element-title">HaXtreme1.0</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna</h4>
                <p>
                ...
                </p>
                </div>
              </VerticalTimelineElement>

            </VerticalTimeline>
          </Container>
        </MainContainer> 
      </ThemeProvider>
    </>
  );
};

export default MyVerticalTimeline;
