
import React, { createRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
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

import { throttle } from 'lodash';


const MainWrapper = tw.div`
  relative w-full flex flex-col
`
const NavbarWrapper = tw.div`
`
const ContentWrapper = tw.div`
flex flex-col overflow-y-auto h-full
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
  const [translateValue, setTranslateValue] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  let cur = 1;


  let initialX = null;
  let initialY = null;

  // const windowSize = useWindowResize();

  const moveDown = (index) => {
    if (DIVIDER_HEIGHT <= index) return;
    setTranslateValue((prev) => prev + windowDimensions.height);
    setScrollIndex((prev) => prev + 1);
    console.log("move down")
  };

  const moveUp = (index) => {
    if (index <= 1) return;

    setTranslateValue((prev) => prev - windowDimensions.height);
    setScrollIndex((prev) => prev - 1);
    console.log("move Up")
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }


  // const ScrollDownThrottle = useMemo(
  //   () =>
  //     throttle(() => {
  //       console.log('Scroll down');
  //       if (cur < scrollRefs.current.length - 1) {
  //         scrollRefs.current[++cur].current.scrollIntoView({ behavior: "smooth" });
  //         setScrollIndex(cur)
  //       }
  //       // else {
  //       //   scrollRefs.current[scrollRefs.current.length - 1].current.scrollIntoView();
  //       //   setScrollIndex(cur)
  //       // }
  //       // if (!tabSelectorRef.current) return;
  //       // const nextTabnavOn = window.scrollY > tabSelectorRef.current.offsetTop + 100;
  //       // if (nextTabnavOn !== isTabnavOn) setIsTabnavOn(nextTabnavOn);
  //     }, 300),
  //   []
  // );

  // const ScrollUpThrottle = useMemo(
  //   () =>
  //     throttle(() => {
  //       console.log('Scroll up');
  //       if (cur > 0) {
  //         scrollRefs.current[--cur].current.scrollIntoView({ behavior: "smooth" });
  //         setScrollIndex(cur)
  //       }
  //     }, 300),
  //   []
  // );



  // useEffect(() => {
  //   const wheelHandler = (e) => {
  //     e.preventDefault();
  //     const { deltaY } = e;
  //     const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
  //     // const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.


  //     if (deltaY > 0) {
  //       ScrollDownThrottle();

  //     } else {
  //       ScrollUpThrottle();
  //     }
  //   };

  //   // modern Chrome requires { passive: false } when adding event
  //   var supportsPassive = false;
  //   try {
  //     window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
  //       get: function () { supportsPassive = true; }
  //     }));
  //   } catch (e) { }
  //   var wheelOpt = supportsPassive ? { passive: false } : false;

  //   const initTouch = (e) => {
  //     initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
  //     initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
  //   }
  //   const swipeDirection = (e) => {
  //     e.preventDefault();
  //     e.stopImmediatePropagation();
  //     e.stopPropagation();
  //     if (initialX !== null && initialY !== null) {
  //       const currentX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
  //       const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

  //       let diffX = initialX - currentX;
  //       let diffY = initialY - currentY;
  //       if (diffY < 0) {
  //         // ScrollDownThrottle();
  //       }
  //       else if (diffY > 0) {
  //         // ScrollUpThrottle();
  //       }
  //       console.log("swipe")
  //       initialX = null;
  //       initialY = null;
  //     }


  //   }

  //   const touchHandler = (e) => {
  //     e.preventDefault();
  //     e.stopImmediatePropagation();
  //     e.stopPropagation();
  //     console.log(e.changedTouches[0].clientX)
  //     console.log(e.changedTouches[0].clientY)
  //     console.log(e.changedTouches[0])
  //   };

  //   const outerDivRefCurrent = outerDivRef.current;
  //   outerDivRefCurrent.addEventListener("wheel", wheelHandler);

  //   // window.addEventListener('touchstart', (e) => { setTouch(true), { passive: false } });

  //   window.addEventListener("touchstart", initTouch, { passive: false });
  //   window.addEventListener('touchmove', swipeDirection, { passive: false });
  //   window.addEventListener("touchend", touchHandler, { passive: false });
  //   // window.addEventListener('touchend', (e) => { setTouch(false), { passive: false } });
  //   return () => {
  //     outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
  //     window.removeEventListener('touchmove', touchHandler);
  //   };
  // }, []);
  useEffect(() => {

    const wheelHandler = (e) => {
      e.preventDefault();
      setWindowDimensions(getWindowDimensions());
      const { deltaY } = e;
      if (deltaY < 0) {
        moveUp(scrollIndex)
      }
      else if (deltaY > 0) {
        moveDown(scrollIndex)
      }

    }

    const initTouch = (e) => {
      initialX = `${e.touches ? e.touches[0].clientX : e.clientX}`;
      initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    }

    const swipeDirection = (e) => {
      e.preventDefault();
      setWindowDimensions(getWindowDimensions());
      if (initialX !== null && initialY !== null) {
        const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

        let diffY = initialY - currentY;
        if (diffY < 0) {
          moveUp()
        }
        else if (diffY > 0) {
          moveDown()
        }
        initialX = null;
        initialY = null;
      }
    }


    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);

    window.addEventListener("touchstart", initTouch, { passive: false });
    window.addEventListener('touchmove', swipeDirection, { passive: false });
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      window.removeEventListener('touchmove', swipeDirection, { passive: false });
    }

  }, [])

  useEffect(() => {
    outerDivRef.current.style.transition = 'all 0.5s ease-in-out';
    outerDivRef.current.style.transform = `translateY(-${translateValue}px)`;
    console.log("effect")
    console.log(translateValue)
    console.log(scrollIndex)

  }, [translateValue])


  return (
    <MainWrapper>
      <NavbarWrapper>
        <Navbar list={list} scrollTo={scrollTo} />
      </NavbarWrapper>
      <ContentWrapper ref={outerDivRef}>
        <SectionHome ref={scrollRefs.current[0]} />
        <SectionIntro ref={scrollRefs.current[1]} />
        <SectionCasterEque ref={scrollRefs.current[2]} />
        <SectionCasterAo ref={scrollRefs.current[3]} />
        <SectionCasterNina ref={scrollRefs.current[4]} />
        <Dots scrollIndex={scrollIndex} />
        {/* <SectionHome ref={scrollRefs.current[0]} />
        <SectionIntro ref={scrollRefs.current[1]} />
        <SectionCasterEque ref={scrollRefs.current[2]} />
        <SectionCasterAo ref={scrollRefs.current[3]} />
        <SectionCasterNina ref={scrollRefs.current[4]} /> */}
      </ContentWrapper >
    </MainWrapper>
  )
}
