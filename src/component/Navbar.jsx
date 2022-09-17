import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import './navbar.css'

import tw from "tailwind-styled-components";

const NavbarWrapper = tw.nav`
  absolute top-0 right-0 h-auto w-full   
  flex items-center
  bg-[#677a80]
`
const NavbarLogo = tw.div`
  w-full
`
const NavbarMenu = tw.div`
  p-2 lg:hidden xl:hidden 
`

const NavbarInner = tw.div`
  flex md: hidden
`

const NavbarText = tw.div`
  cursor-pointer text-[#FFFFFF]
  py-2 px-8 text-sm
`
const NavbarTextHighlight = tw.div`
  cursor-pointer text-nav-highlight
  py-2 px-8
`

export default function Navbar(prop) {
  const [menuToggle, setMenuToggle] = useState(false);
  const { list, scrollTo, homeClick, introClick, characterClick } = prop
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function handleScroll() {
    if (ScrollY > 30) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }


  return (
    <nav className="nav-section">
      <NavbarWrapper>
        <NavbarLogo>
          <img src="./images/background/logo.png" className="lg:max-w-lg w-32 cursor-pointer" />
        </NavbarLogo>
        <NavbarMenu>
          {!menuToggle ? (
            <AiOutlineMenu onClick={() => setMenuToggle(!menuToggle)}
              className="hover:cursor-pointer" size={30} color="#FFFFFF">
            </AiOutlineMenu>
          ) : (
            <div>
              <AiOutlineClose onClick={() => setMenuToggle(!menuToggle)}
                className="hover:cursor-pointer" size={30} color="#FFFFFF" >
              </AiOutlineClose>
              <div className="bg-[#677a80] absolute right-0">
                {list.map((item, i) => (
                  <NavbarText onClick={scrollTo(i)} key={i}>{item}</NavbarText>
                ))}
              </div>
            </div>
          )}

        </NavbarMenu>
        <NavbarInner>
          {list.map((item, i) => (
            <NavbarText onClick={scrollTo(i)} key={i}>{item}</NavbarText>
          ))}
          {/* <p onClick={homeClick}>HOME</p>
          <p onClick={introClick}>INTRODUCE</p>
          <p onClick={characterClick}>CHARACTER</p> */}
        </NavbarInner>

      </NavbarWrapper>

    </nav>
  )
}