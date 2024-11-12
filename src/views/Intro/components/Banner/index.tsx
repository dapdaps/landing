import ArrowSvg from "@public/images/intro/arrow.svg?url";
import ArrowRightSvg from "@public/images/intro/arrow-right.svg";
import BridgeSvg from "@public/images/intro/bridge.svg";
import DavinciSvg from "@public/images/intro/davinci.svg?url";
import PoundSignSvg from "@public/images/intro/pound-sign.svg?url";
import StarSvg from "@public/images/intro/star.svg?url";
import SwapSvg from "@public/images/intro/swap.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo } from "react";
import styled from "styled-components";

import { StyledFlex, StyledFont } from "@/styled/styles";
import { openAppLink } from "@/utils/links";
const StyledBanner = styled.div`
  margin: 0 auto;
  padding: 72px 0 4px;
  max-width: 1452px;
  width: 100%;
  background: url('/images/intro/banner-bg.svg') no-repeat center;
  background-size: 100% 511px;
  /* overflow: hidden; */
  
`
const StyledSuperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #202329;
  background: #18191E;
  backdrop-filter: blur(10px);
  cursor: pointer;
  &:hover {
    background-color: #32343E;
  }
`
const StyledExporeButton = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 277px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #EBF479;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    transform: scale(110%);
  }
`
const StyledImage = styled.img`
  @media (max-width: 800px) {
    display: none;
  }
`

const StyledMainHeading = styled.div`
  position: relative;
  margin: 30px auto 62px;
  max-width: 57.312em;
  @keyframes FlickerAnimation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
  @keyframes RotateAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .StarSvg {
    animation: FlickerAnimation 1.5s linear infinite;
  }
  .DavinciSvg {
    border-radius: 50%;
    &:hover {
      animation: RotateAnimation 3.5s linear infinite;
    }
  }

`
const StyledMainTips = styled.div`
  width: 736px;
  margin: 0 auto 30px;
  @media (max-width: 800px) {
    width: 85%;
  }
`
export default memo(function Banner() {
  const router = useRouter()
  return (
    <StyledBanner>
      <StyledFlex justifyContent="center" gap="10px">
        <StyledFont className="mini-title" color="#FFF" fontSize="18px" lineHeight="150%">Quick start your Web3 journey with</StyledFont>
        <StyledSuperButton style={{ width: 152 }} onClick={() => openAppLink("/super-bridge")}>
          <BridgeSvg />
          <StyledFont color="#FFF" fontWeight="600" lineHeight="100%">Super Bridge</StyledFont>
        </StyledSuperButton>
        <StyledSuperButton style={{ width: 145 }} onClick={() => openAppLink("/super-swap")}>
          <SwapSvg />
          <StyledFont color="#FFF" fontWeight="600" lineHeight="100%">Super Swap</StyledFont>
        </StyledSuperButton>
      </StyledFlex>
      <StyledMainHeading>
        <StyledFont color="#FFF" fontSize="5.625em" fontWeight="800" lineHeight="100%" textAlign="center">The Next-gen DeFi Consumer App</StyledFont>
        <StyledImage src={ArrowSvg.src} style={{ position: "absolute", width: "11.625em", height: "8.375em", left: "27em", bottom: "-2.687em" }} />
        <StyledImage src={PoundSignSvg.src} style={{ position: "absolute", width: "3.3125em", height: "3.8125em", left: "11.125em", top: "-0.875em" }} />
        <StyledImage className="DavinciSvg" src={DavinciSvg.src} style={{ position: "absolute", width: "10.625em", height: "10.625em", right: "-4.375em", bottom: "-4.75em" }} />
        <StyledImage className="StarSvg" src={StarSvg.src} style={{ position: "absolute", width: "2.25em", height: "2.25em", left: "-1.125em", bottom: "-2.3125em" }} />
      </StyledMainHeading>
      <StyledMainTips>
        <StyledFont color="#FFF" fontSize="20px" lineHeight="150%" textAlign="center">DapDap offers a first-of-its-kind DeFi experience. We simplify the complex landscape of Ethereum L2s and EVMs, providing a single, unified gateway to explore and interact with multiple networks and their apps.</StyledFont>
      </StyledMainTips>
      <StyledExporeButton
        onClick={() => {
          openAppLink("/")
        }}
      >
        <StyledFont color="#000" fontSize="18px" fontWeight="600">Explore now</StyledFont>
        <ArrowRightSvg />
      </StyledExporeButton>
    </StyledBanner>
  )
})