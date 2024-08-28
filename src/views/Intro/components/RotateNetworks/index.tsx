import { memo, useState } from "react";
import styled from "styled-components";

import chainCofig from "@/config/chains";
import { openAppLink } from "@/utils/links";
import { useChainsStore } from '@/stores/chains';
import { IdToPath } from "@/config/all-in-one/chains";
const StyledRotateNetworksContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-top: 139px;
  width: 1277px;
  height: 479px;
  overflow: hidden;
`
const StyledRotateNetworks = styled.div`
  position: absolute;
  left: 50%;
  top: 139px;
  margin-left: -780px;
  width: 1560px;
  height: 1560px;
  transform-origin: center;
  transform: rotate(0deg);
  animation: RotateAnimation 50s linear infinite;
  /* &:hover {
    animation-play-state: paused;
  } */
  @keyframes RotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const StyledRotateNetwork = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  margin-left: -36px;
  width: 72px;
  height: 780px;
  transform-origin: center bottom;
`
const StyledRotateNetworkImage = styled.img`
  cursor: pointer;
  width: 72px;
  height: 72px;
`
const StyledRotateNetworkName = styled.div`
  position: absolute;
  left: 50%;
  top: -15px;
  padding: 12px 21px;
  transform: translate(-50%, -100%);
  border-radius: 8px;
  border: 1px solid #333648;
  background: #1F2229;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`
// const chains = Object.values(chainCofig);

export default memo(function RotateNetworks() {
  const chains = useChainsStore((store: any) => store.chains);
  const [mouseIndex, setMouseIndex] = useState(-1)
  const len = chains.length

  const fillChains = new Array(45).fill(true).map((_, index) => chains[index % len])
  return (
    <StyledRotateNetworksContainer>
      <StyledRotateNetworks style={{ animationPlayState: mouseIndex > -1 ? 'paused' : 'running' }}>
        {
          fillChains.map((chain, index) => (
            <StyledRotateNetwork key={index} style={{ transform: `rotate(${index * 8}deg)` }}>
              {
                index === mouseIndex && (
                  <StyledRotateNetworkName>{chain?.name}</StyledRotateNetworkName>
                )
              }
              <StyledRotateNetworkImage
                src={chain?.logo}
                onClick={() => {
                  openAppLink('/networks/' + IdToPath[chain?.id])
                }}
                onMouseEnter={() => {
                  setMouseIndex(index)
                }}
                onMouseLeave={() => {
                  setMouseIndex(-1)
                }}
              />
            </StyledRotateNetwork>
          ))
        }
      </StyledRotateNetworks>
    </StyledRotateNetworksContainer>
  )
})