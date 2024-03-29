import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import { keyframes } from "styled-components";
import { useState } from "react";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
import MetaData from "./MetaData";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h2,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 768px) {
    right: calc(1rem + 1vw);
    top: 1rem;
    font-size: 0.7rem;
  }
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 768px) {
    right: calc(1rem + 1vw);
    font-size: 0.7rem;
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 768px) {
    left: calc(1rem + 3vw);
    font-size: 0.7rem;
  }

  @media (max-width: 600px) {
    left: calc(1rem + 3vw);
    top: 40%;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  span {
    cursor: pointer;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;
`;

// Changing size of YinYang based on media queries

const YinYangContainer = styled.div`
  .yin-yang {
    @media (max-width: 768px) {
      width: ${(props) => (props.click ? "100%" : "100%")};
      height: ${(props) => (props.click ? "100%" : "100%")};
    }
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <MetaData title="Yash Raj Gupta"/>
      <DarkDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYangContainer>
            <YinYang
              className="yin-yang"
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
          </YinYangContainer>
          <span onClick={() => handleClick()}>click here</span>
        </Center>

        <Contact target="_blank" to={{ pathname: "mailto:yrg95019@gmail.com" }}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say Hi....
          </motion.h2>
        </Contact>

        {/* <BLOG to="/blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG> */}

        <WORK to="/work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>

          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
