import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theme";
import styled, { keyframes } from "styled-components";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png";
import { bounce } from "react-animations";
import ReactFloaterJs from "react-floaterjs";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) tranlateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 8rem;
  right: 5%;
  width: 15vw;

  @media (max-width: 768px) {
    top: 4rem;
  }

  img {
    width: 100%;
    height: auto;
  }
  animation: ${float} 4s ease infinite;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <ReactFloaterJs>
          <Spaceman>
            <img src={astronaut} alt="spaceman" />
          </Spaceman>
        </ReactFloaterJs>

        <Main>
          I'm a full stack developer located in India. I love to create simple
          yet beautiful websites with great user experience on MERN Stack.
          <br />
          <br />
          I'm interested in the whole frontend and Backend stack Like trying new
          things and building great projects. I'm a programmer. I love to code
          and read books.
          <br />
          <br />I believe everything is an Art when you put your consciousness
          in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
