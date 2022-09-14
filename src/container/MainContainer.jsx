
import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import SectionCaster from "../component/SectionCaster";
import SectionHome from "../component/SectionHome";
import SectionIntro from "../component/SectionIntro";
import './mainContainer.css'

import tw from "tailwind-styled-components";
import Dots from "../component/Dots";


const MainWrapper = tw.div`
  relative w-full flex flex-col
`
const NavbarWrapper = tw.div`
`
const ContentWrapper = tw.div`
flex flex-col overflow-y-auto h-screen 
`
const DIVIDER_HEIGHT = 5;

export default function MainContainer() {
  const scrollRefs = useRef([]);
  /**
   * navigation 리스트 별로 ref 초기화
   */
  const list = ["MAIN", "INTRODUCE", "CASTER"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  const scrollTo = (index) => () => {
    scrollRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
    // setActive(index);
  };

  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      console.log("scrollTop  : " + scrollTop)
      console.log(pageHeight)

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);


  return (
    <MainWrapper>
      <NavbarWrapper>
        <Navbar list={list} scrollTo={scrollTo} />
      </NavbarWrapper>
      <ContentWrapper ref={outerDivRef}>
        <Dots scrollIndex={scrollIndex} />
        <SectionHome />
        <SectionIntro />
        <SectionCaster />
      </ContentWrapper >
    </MainWrapper>
  )
}
