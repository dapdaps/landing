import { memo } from "react";


import styled from "styled-components";
import Banner from "./components/Banner";
import Fist from "./components/Fist";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Into from "./components/Into";
import MiniCard from "./components/MiniCard";
import Partners from "./components/Partners";
import RotateNetworks from "./components/RotateNetworks";
import Slogan from "./components/Slogan";
import Statistics from "./components/Statistics";

const StyledIntroContainer = styled.div`
  background-color: #000;
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media screen and (min-width: 800px) and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1550px) {
    font-size: 14px;
  }
`
export default memo(function HomePage() {
  return (
    <StyledIntroContainer>
      <Header />
      <Banner />
      <RotateNetworks />
      <Into />
      <MiniCard />
      <Statistics />
      <Partners />
      <Fist />
      <Slogan />
      <Footer />
    </StyledIntroContainer>
  )
})