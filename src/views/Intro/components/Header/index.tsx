import { useRouter } from "next/router"
import { memo, useEffect, useState } from "react"
import styled from "styled-components"

import { StyledFont, StyledSvg } from "@/styled/styles"

import type { NavigationType } from "../../types"
import { useSetState } from "ahooks"

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  padding: 0 45px 0 36px;
  background-color: #000;
  z-index: 50;
`
const StyledLogo = styled.img`
  height: 32px;
  cursor: pointer;
`
const StyledMenuList = styled.div`
  display: flex;
  gap: 68px;
  @media (max-width: 800px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 60vw;
    background-color: #0F1921;
    display: block;
    padding-left: 20px;
    &.menu-mobile {
      display: none;
    }
  }
`
const StyledMenuPopUp = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding-top: 7px;
  transform: translate(-50%, 100%);
`
const StyledMenuContainer = styled.div`
  position: relative;
  &:hover {
    ${StyledMenuPopUp} {
      display: block;
    }
  }
`

const StyledMenuIcon = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    cursor: pointer;
  }
`

const StyledMenu = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    font-weight: 700;
  }
  @media (max-width: 800px) {
    line-height: 300%;
    border-bottom: 1px solid #25313E;
  }
`

const StyledMenuPopUpBody = styled.div`
  padding: 8px 7px;
  width: 206px;
  border-radius: 20px;
  background: #F2F2F2;
  box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.25);
`
const StyledCommunity = styled.div`
  cursor: pointer;
  height: 57px;
  border-radius: 16px;
  /* background: #DADADA; */
  padding-left: 18px;
  display: flex;
  align-items: center;
  gap: 17px;
  &:hover {
    background: #DADADA;
  }
  ${StyledSvg} {
    width: 25px;
  }
`

const COMMUNITY_LIST: NavigationType[] = [{
  label: "X / Twitter",
  path: "https://twitter.com/DapDapMeUp",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path d="M10.7975 8.04613L17.5516 0H15.9516L10.0846 6.98491L5.40206 0H0L7.08242 10.5634L0 19H1.59994L7.79169 11.6221L12.7378 19H18.1399M2.17739 1.2365H4.63535L15.9504 17.8242H13.4919" fill="black" />
    </svg>
  )
}, {
  label: "Discord",
  path: "https://discord.gg/dapdapmeup",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
      <path d="M12.5971 0.785621C7.5818 0.785621 4.06358 2.70789 4.06358 2.70789C5.99112 1.17007 9.35963 0.284162 9.35963 0.284162L9.04149 0C5.87883 0.050146 3.0156 2.00584 3.0156 2.00584C-0.203207 8.00665 0.0026473 13.1884 0.0026473 13.1884C2.6226 16.2139 6.51511 15.9966 6.51511 15.9966L7.8438 14.4922C5.50456 14.0409 4.02615 12.1855 4.02615 12.1855C4.02615 12.1855 7.54438 14.325 12.5971 14.325C17.6499 14.325 21.1681 12.1855 21.1681 12.1855C21.1681 12.1855 19.6897 14.0409 17.3505 14.4922L18.6792 15.9966C18.6792 15.9966 22.5717 16.2139 25.1917 13.1884C25.1917 13.1884 25.3975 8.00665 22.1787 2.00584C22.1787 2.00584 19.3155 0.050146 16.1528 0L15.8347 0.284162C15.8347 0.284162 19.2032 1.17007 21.1307 2.70789C21.1307 2.70789 17.6125 0.785621 12.5971 0.785621ZM8.72336 7.12073C9.93976 7.12073 10.9316 8.07351 10.9129 9.24358C10.9129 10.3969 9.93976 11.3664 8.72336 11.3664C7.52566 11.3664 6.55254 10.3969 6.55254 9.24358C6.55254 8.07351 7.50695 7.12073 8.72336 7.12073ZM16.5271 7.12073C17.7435 7.12073 18.7166 8.07351 18.7166 9.24358C18.7166 10.3969 17.7435 11.3664 16.5271 11.3664C15.3294 11.3664 14.3563 10.3969 14.3563 9.24358C14.3563 8.07351 15.3107 7.12073 16.5271 7.12073Z" fill="black" />
    </svg>
  )
}, {
  label: "Telegram",
  path: "https://t.me/DapDapDiscussion",
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
      <path d="M8.71985 17.8505L9.07994 12.5365L18.9566 3.84302C19.3939 3.45357 18.8666 3.26513 18.2879 3.60433L6.09636 11.1294L0.823662 9.49627C-0.30804 9.1822 -0.3209 8.41587 1.08087 7.86311L21.6187 0.124434C22.5575 -0.290138 23.4577 0.350564 23.0976 1.7576L19.5996 17.8505C19.3553 18.9937 18.648 19.2701 17.6706 18.7425L12.3464 14.8983L9.78725 17.3229C9.49146 17.6118 9.24712 17.8505 8.71985 17.8505Z" fill="black" />
    </svg>
  )
},];

const PRODUCTS_LIST: NavigationType[] = [
  {
    label: "DapDap",
    path: "https://app.dapdap.net/",
    target: "_blank",
    icon: (
      <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.91839 15.6483C1.39153 13.3488 3.87506 7.45045 3.87506 7.45045L17.178 6.56635C19.7509 5.87693 22.3955 7.40382 23.0849 9.97673L28.7103 19.2472C27.806 23.7688 27.0567 26.3322 24.4837 27.0216L11.0003 30.9079C8.42742 31.5973 5.78278 30.0704 5.09337 27.4975L1.91839 15.6483Z"
          fill="#EBF479"
        />
        <path
          d="M3.5883 10.6389C2.8783 7.98911 4.45079 5.2655 7.10054 4.5555L19.3036 1.28569C21.9534 0.57569 24.677 2.14817 25.387 4.79793L28.6568 17.001C29.3668 19.6508 27.7943 22.3744 25.1446 23.0844L12.9415 26.3542C10.2917 27.0642 7.56811 25.4917 6.85811 22.842L3.5883 10.6389Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.625 2.48514L7.42193 5.75495C5.43462 6.28745 4.25525 8.33016 4.78775 10.3175L8.05756 22.5206C8.59006 24.5079 10.6328 25.6872 12.6201 25.1547L24.8232 21.8849C26.8105 21.3524 27.9899 19.3097 27.4574 17.3224L24.1875 5.11932C23.655 3.132 21.6123 1.95264 19.625 2.48514ZM7.10054 4.5555C4.45079 5.2655 2.8783 7.98911 3.5883 10.6389L6.85811 22.842C7.56811 25.4917 10.2917 27.0642 12.9415 26.3542L25.1446 23.0844C27.7943 22.3744 29.3668 19.6508 28.6568 17.001L25.387 4.79793C24.677 2.14817 21.9534 0.57569 19.3036 1.28569L7.10054 4.5555Z"
          fill="#EBF479"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.0454 7.9507L11.7892 8.82321C11.2557 8.96615 10.9391 9.51449 11.0821 10.048L11.4412 11.3883C11.5841 11.9217 12.1325 12.2383 12.6659 12.0954L15.6242 11.3027C16.7112 11.0114 17.8286 11.6565 18.1199 12.7436C18.4112 13.8307 17.7661 14.948 16.679 15.2393L13.7208 16.032C13.1873 16.1749 12.8707 16.7233 13.0136 17.2567L13.3879 18.6533C13.5308 19.1868 14.0791 19.5034 14.6126 19.3604L17.8689 18.4879C20.7786 17.7083 22.5054 14.7174 21.7258 11.8076C20.9461 8.89782 17.9552 7.17103 15.0454 7.9507Z"
          fill="#EBF479"
        />
      </svg>
    )
  },
  {
    label: 'BeraTown',
    path: 'https://beratown.dapdap.net/',
    target: '_blank',
    icon: (
      <img src="/images/beratown-logo.png" alt="" width={31} />
    )
  },
  {
    label: 'NADSA',
    path: 'https://www.nadsa.space/',
    target: '_blank',
    icon: (
      <img src="/images/nadsa-logo.png" alt="" width={31} className="w-[31px] h-[33px] object-center object-contain" />
    )
  }
];

const MENU_LIST: NavigationType[] = [
  {
    path: '',
    label: 'Products',
    target: '_blank',
    dropdown: PRODUCTS_LIST,
  },
  {
    path: '',
    label: 'Community',
    dropdown: COMMUNITY_LIST,
  },
  {
    path: 'https://dapdap.mirror.xyz/',
    label: 'Blog',
    target: '_blank',
  },
  {
    path: 'https://docs.dapdap.net/',
    label: 'Documentation',
    target: '_blank'
  }
];

const logoUrl = 'https://assets.dapdap.net/images/logo.png';
export default memo(function Header() {
  const router = useRouter()
  const [menuShow, setMenuShow] = useState(false)

  const docClick = (e: any) => {
    if (!e.target.classList.contains('flag') && !e.parentNode?.target.classList.contains('flag')) {
      setMenuShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', docClick, false)

    return () => {
      document.removeEventListener('click', docClick)
    }
  }, [])

  return (
    <StyledHeader>
      <StyledLogo
        src={logoUrl}
        onClick={() => {
          router.push("/")
        }}
      />

      <StyledMenuIcon
        className="flag" onClick={(e) => {
        e.nativeEvent.stopImmediatePropagation()
        setMenuShow(true)
      }}
      >
        <svg className="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="2" rx="1" fill="#7E8A93" />
          <rect y="7" width="16" height="2" rx="1" fill="#7E8A93" />
          <rect y="14" width="16" height="2" rx="1" fill="#7E8A93" />
        </svg>
      </StyledMenuIcon>


      <StyledMenuList
        onClick={(e) => {
          e.nativeEvent.stopImmediatePropagation()
        }} className={menuShow ? "flag" : "flag menu-mobile"}
      >
        {
          MENU_LIST.map((menu: NavigationType) => {
            return (
              <StyledMenuContainer key={menu.label}>
                <StyledMenu
                  key={menu.label}
                  onClick={() => {
                    if (!!menu.dropdown) return;
                    menu?.path && window.open(menu?.path, menu?.target);
                  }}
                >
                  {menu.label}
                </StyledMenu>
                {
                  !!menu.dropdown && (
                    <StyledMenuPopUp>
                      <StyledMenuPopUpBody>
                        {
                          menu.dropdown.map(community => (
                            <StyledCommunity
                              key={community.label}
                              onClick={() => {
                                community?.path && window.open(community?.path, menu?.target || '_blank')
                              }}
                            >
                              <StyledSvg>
                                {community?.icon}
                              </StyledSvg>
                              <StyledFont fontSize="18px" fontWeight="500" lineHeight="150%">
                                {community?.label}
                              </StyledFont>
                            </StyledCommunity>
                          ))
                        }
                      </StyledMenuPopUpBody>
                    </StyledMenuPopUp>
                  )
                }
              </StyledMenuContainer>
            )
          })
        }
      </StyledMenuList>
    </StyledHeader>
  )
})
