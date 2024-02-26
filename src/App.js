import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import MyVerticalTimeline from "./pages/Achievments/Achievments";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/skills/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";
import NavBar from "./components/NavBar/NavBar";
import { ContactUs } from "./components/contact/contact";
import MediaCard from "./pages/Certificates/Certificates";
import Certificates from "./pages/CertificatesM/Certificates";
import Resume from "./pages/Resume/resume";



function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <NavBar/>
        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location} >
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/contact" element={<ContactUs />} />

            <Route path="/project" element={<WorkPage />} />

            <Route path="/Achievments" element={<MyVerticalTimeline />} />

            <Route path="/Certificates" element={<Certificates/>} />

            <Route path="/resume" element={<Resume/>} />

            <Route path="/skills" element={<MySkillsPage />} />
            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
