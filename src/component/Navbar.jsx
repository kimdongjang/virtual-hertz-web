import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import './navbar.css'

import tw from "tailwind-styled-components";

const NavbarWrapper = tw.div`
  absolute top-0 right-0 h-auto w-full
  bg-nav-fill 
  flex justify-between
`
const NavbarLogo = tw.div`
  cursor-pointer
  text-p-white
  pl-8 pt-2
`

const NavbarInner = tw.div`
  flex  pr-64
`

const NavbarText = tw.div`
  cursor-pointer text-p-white
  py-2 px-8
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

  // useEffect(() => {
  //   function scrollListener() {
  //     window.addEventListener("scroll", handleScroll);
  //     console.log(ScrollY)
  //   } //  window 에서 스크롤을 감시 시작
  //   scrollListener(); // window 에서 스크롤을 감시
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   }; //  window 에서 스크롤을 감시를 종료
  // });


  return (
    <nav className="nav-section">
      <NavbarWrapper>
        <NavbarLogo>
          Virtual Hertz
        </NavbarLogo>
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