import styled, { keyframes } from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import ConfigSnow from "../config/particlesjs-config-snow.json";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import SantaImg from "../assets/santa-sleigh.png";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const fly = keyframes`
  0% { transform: translateX(-100%) translateY(20px); }
  50% { transform: translateX(50vw) translateY(-20px); }
  100% { transform: translateX(100vw) translateY(20px); }
`;

const Sleigh = styled.img`
  position: absolute;
  top: 20%;
  left: 0;
  width: 15rem; // Adjust size
  height: auto;
  z-index: 1;
  animation: ${fly} 20s linear infinite;
  opacity: 0.8;
  mix-blend-mode: screen;
  
  @media (max-width: 768px) {
    width: 8rem;
    top: 10%;
  }
`;

const ParticlesComponent = (props) => {
  // This is new implementation where I have used react-tsparticles instead of react-particles-js
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <Box>
      <Sleigh src={SantaImg} alt="Santa Sleigh" />
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigSnow}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
