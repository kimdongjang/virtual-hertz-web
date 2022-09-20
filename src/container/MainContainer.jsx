
import React, { createRef, useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import SectionCaster from "../component/SectionCaster";
import SectionHome from "../component/SectionHome";
import SectionIntro from "../component/SectionIntro";
import './mainContainer.css'

import tw from "tailwind-styled-components";
import Dots from "../component/Dots";
import SectionCasterEque from "../component/SectionCasterEque";
import SectionCasterAo from "../component/SectionCasterAo";
import SectionCasterNina from "../component/SectionCasterNina";
import useWindowResize from "../hooks/useWindowResize";


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
  const list = ["MAIN", "INTRODUCE", "EQUE", "AO", "NINA"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  const scrollTo = (index) => () => {
    scrollRefs.current[index]?.current.scrollIntoView({ behavior: "smooth" });
    // setActive(index);
  };

  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [currentScroll, setCurrentScroll] = useState(0);

  let cur = 0;

  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      console.log("scrollTop  : " + scrollTop)
      console.log("pageHeight  : " + pageHeight)
      console.log("pageHeight  : " + pageHeight * 2)
      console.log("pageHeight  : " + pageHeight * 3)
      console.log("pageHeight  : " + pageHeight * 4)


      if (deltaY > 0) {
        if (cur < scrollRefs.current.length - 1) {
          scrollRefs.current[++cur].current.scrollIntoView({ behavior: "smooth" });
          setScrollIndex(cur)
        }
        else {
          scrollRefs.current[scrollRefs.current.length - 1].current.scrollIntoView({ behavior: "smooth" });
          setScrollIndex(cur)
        }

        // // 스크롤 내릴 때
        // if (scrollTop >= 0 && scrollTop < pageHeight) {
        //   //현재 1페이지
        //   console.log("0->1");
        //   setScrollIndex(2);
        // } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 1.8) {
        //   //현재 2페이지
        //   console.log("1->2");
        //   scrollRefs.current[2].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(3);
        // } else if (scrollTop >= pageHeight * 1.8 && scrollTop < pageHeight * 2.8) {
        //   //현재 3페이지
        //   console.log("2->3");
        //   scrollRefs.current[3].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(4);
        // } else if (scrollTop >= pageHeight * 2.8 && scrollTop < pageHeight * 4) {
        //   console.log("3->4");
        //   scrollRefs.current[4].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(5);
        // }
      } else {
        // 스크롤 올릴 때
        if (cur > 0) {
          scrollRefs.current[--cur].current.scrollIntoView({ behavior: "smooth" });
          setScrollIndex(cur)
        }
        // if (scrollTop >= 0 && scrollTop < pageHeight + 1) {
        //   //현재 1페이지
        //   console.log("1->0");
        //   scrollRefs.current[0].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(1);
        // } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 1.8) {
        //   //현재 2페이지
        //   console.log("3->2");
        //   scrollRefs.current[1].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(3);
        // } else if (scrollTop >= pageHeight * 1.8 && scrollTop < pageHeight * 2.8) {
        //   //현재 2페이지
        //   console.log("4->3");
        //   scrollRefs.current[2].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(3);
        // } else if (scrollTop >= pageHeight * 2.8 && scrollTop < pageHeight * 4) {
        //   //현재 2페이지
        //   console.log("5->4");
        //   scrollRefs.current[3].current.scrollIntoView({ behavior: "smooth" });
        //   setScrollIndex(4);
        // }
      }
    };

    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      // window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener('touchmove', preventDefault, wheelOpt);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    };
  }, []);


  return (
    <MainWrapper>
      <NavbarWrapper>
        <Navbar list={list} scrollTo={scrollTo} />
      </NavbarWrapper>
      <ContentWrapper ref={outerDivRef}>
        <Dots scrollIndex={scrollIndex} />
        <SectionHome ref={scrollRefs.current[0]} />
        <SectionIntro ref={scrollRefs.current[1]} />
        <SectionCasterEque ref={scrollRefs.current[2]} />
        <SectionCasterAo ref={scrollRefs.current[3]} />
        <SectionCasterNina ref={scrollRefs.current[4]} />
      </ContentWrapper >
    </MainWrapper>
  )
}
