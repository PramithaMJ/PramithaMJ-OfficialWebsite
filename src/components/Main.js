import { motion } from 'framer-motion'
import React, { useState,Suspense ,lazy} from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'
import Contact2 from "../Sections/Contact/index";
import MyVerticalTimeline from '../pages/Achievments/Achievments'


import {GlobalStyleM} from "../globalStylesM";
import MainS from "./MainS";
import BlogPage from './BlogPage'
import LatestBlogs from '../pages/LatestBlogs/LatestBlogs'
import ParticlesComponent from '../subComponents/ParticleComponent'
import HeroSection from '../Sections/Hero'
import GithubActivity from '../Sections/GithubActivity/GithubActivity'
import MySkillsPage from './skills/MySkillsPage'
import SkillCard2 from '../pages/Card/card'
import Testimonials from '../Sections/Testimonials'
const MHome = lazy(() => import("../pages/Home/MHome"));
const Header = lazy(() => import("../sectionComponents/Header/HeaderM"));
const Footer = lazy(() => import("../sectionComponents/Footer/Footer"));
const ScrollToTop = lazy(() => import("../sectionComponents/ScrollToTop/ScrollToTop"));

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`
const WORK = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' :'50%'  };
left: ${props => props.click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


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


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
          {/* <ParticlesComponent /> */}
            <Suspense fallback={null}>
                {/* <Header /> */}
                {/* <ParticlesComponent/> */}
                
                {/* <MainS /> */}
                <GlobalStyleM />
                <ScrollToTop />
                <MHome />
                 <MySkillsPage/>
                <MyVerticalTimeline />
                <Testimonials />
            <LatestBlogs />
            <GithubActivity />
            <Contact2/>
                <Footer />
            </Suspense>


        </>
    )
}

export default Main
