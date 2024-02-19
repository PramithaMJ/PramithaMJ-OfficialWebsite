import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GlobalStyleM } from '../../globalStylesM';
import GlobalStyle from '../../globalStyles';
import { DarkTheme } from '../../components/Themes';
import styled, {ThemeProvider} from 'styled-components'
import { motion } from 'framer-motion'
import img from "../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import ParticlesComponent from '../../subComponents/ParticleComponent';





const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},1)`};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
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
// ... (previous imports)

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
          <Container>
            <VerticalTimeline>
              <ParticlesComponent theme="light" />

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date="2018 - present"
                
              >
                <h3 className="vertical-timeline-element-title">Ranking No. 1 In Kattis</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">Competitive Programming</h4>
                <p>
                  1st place in Sri Lanka, according to Kattis website ranking (2023/02/09)
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Competitive Programming</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">HackerRank</h4>
                <p>
                  5th Star with Gold Batch in HackerRank.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">HaXtream 2.0</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna</h4>
                <p>
                 OUR Team Brainleft at the HaXtreme 17.0 2023 competition secured the 5th position at the University of Ruhuna.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">IEE Xtreme 17.0</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE</h4>
                <p>
                 OUR Team Brainleft at the IEEE Xtreme 17.0 2023 competition secured the 3rd position at the University of Ruhuna and ranked 90th in the national standings for Sri Lanka.
                </p>
              </VerticalTimelineElement>

               <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">Eminence 3.0 - 2023</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna ,WIE</h4>
                <p>
                As a member of Team TechSpark, achieved 6th place at Eminence 3.0
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                
              >
                <h3 className="vertical-timeline-element-title">HaXtreme1.0</h3>
                <br/>
                <h4 className="vertical-timeline-element-subtitle">IEEE Student Branch University of Ruhuna</h4>
                <p>
                ...
                </p>
              </VerticalTimelineElement>

            </VerticalTimeline>
          </Container>
        </MainContainer> 
      </ThemeProvider>
    </>
  );
};

export default MyVerticalTimeline;
