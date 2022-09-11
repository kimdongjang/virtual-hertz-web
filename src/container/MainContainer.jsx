
import React, { createRef, useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import SectionCharacter from "../component/SectionCharacter";
import SectionHome from "../component/SectionHome";
import SectionIntro from "../component/SectionIntro";
import './mainContainer.css'

import tw from "tailwind-styled-components";


const MainWrapper = tw.div`
  relative w-full
`

export default function MainContainer() {
  const scrollRefs = useRef([]);
  let currentScroll = 0;
  /**
   * navigation 리스트 별로 ref 초기화
   */
  const list = ["HOME", "INTRODUCE", "CASTER"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  const scrollTo = (index) => () => {
    scrollRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
    // setActive(index);
  };


  const scrollHandler = () => {
    scrollRefs.current.forEach((el, i) => {
      const rect = el.current.getBoundingClientRect();

      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

      if (isVisible) {
        // setActive(i);
      }
    });
  };

  const outerDivRef = useRef();
    useEffect(() => {
      const wheelHandler = (e) => {
        e.preventDefault();
        // 스크롤 행동 구현
      };
      const outerDivRefCurrent = outerDivRef.current;
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
      return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    }, []);

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", scrollHandler);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시    
    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
    // alert([...Array(list.length).keys()]);
  }, [])

  // useEffect(() => {
  //   window.addEventListener("scroll", scrollHandler, true);
  //   return () => {
  //     window.removeEventListener("scroll", scrollHandler, true);
  //   };
  //   // alert([...Array(list.length).keys()]);
  // }, [])

  return (
    <div>
      <div>
        <Navbar list={list} scrollTo={scrollTo} />
      </div>
      <MainWrapper>
        <SectionHome ref={scrollRefs.current[0]} />
        <SectionIntro ref={scrollRefs.current[1]} />
        <SectionCharacter ref={scrollRefs.current[2]} />
      </MainWrapper>
    </div>
  )
}
