import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import './navbar.css'

export default function Navbar(prop) {
  const [menuToggle, setMenuToggle] = useState(false);
  const { list, scrollTo, homeClick, introClick, characterClick } = prop
  // const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  // const [ScrollActive, setScrollActive] = useState(false);
  // function handleScroll() {
  //   if (ScrollY > 30) {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(true);
  //   } else {
  //     setScrollY(window.pageYOffset);
  //     setScrollActive(false);
  //   }
  // }

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
      <div className="nav-section__bg">
        <div className="nav-section__bg__inner">
          {list.map((item, i) => (
            <p onClick={scrollTo(i)}>{item}</p>
          ))}
          {/* <p onClick={homeClick}>HOME</p>
          <p onClick={introClick}>INTRODUCE</p>
          <p onClick={characterClick}>CHARACTER</p> */}
        </div>

      </div>

    </nav>
  )
}