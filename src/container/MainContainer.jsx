
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
import SectionContactus from "../component/SectionContactus";


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
  const list = ["MAIN", "INTRODUCE", "EQUE", "AO", "NINA", "CONTACT US"];
  scrollRefs.current = list.map((_, i) => scrollRefs.current[i] ?? createRef());

  const scrollTo = (index) => () => {
    scrollIndexLet = index
    setScrollIndex(index);
    // ScrollMove(index);
    // setActive(index);
  };

  const outerDivRef = useRef();
  const windowSize = useRef(getWindowDimensions());
  const [scrollIndex, setScrollIndex] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(getWindowDimensions().height);


  let scrollIndexLet = 0;
  let timeout = useRef();
  let initialY = null;


  // const windowSize = useWindowResize();

  const moveDown = () => {
    if (list.length - 1 <= scrollIndexLet) return;
    scrollIndexLet += 1;
    setScrollIndex(scrollIndexLet);
  };

  const moveUp = () => {
    if (scrollIndexLet <= 0) return;
    scrollIndexLet -= 1;
    setScrollIndex(scrollIndexLet);
  };

  const ScrollMove = (index) => {
    outerDivRef.current.style.transition = 'all 1s ease-in-out';
    outerDivRef.current.style.transform = `translateY(-${windowSize.current.height * index}px)`;
  }


  useEffect(() => {
    ScrollMove(scrollIndex);
  }, [scrollIndex])


  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }



  useEffect(() => {
    const initTouch = (e) => {
      initialY = `${e.touches ? e.touches[0].clientY : e.clientY}`;
    }

    const wheelHandler = (e) => {
      e.preventDefault();
      clearTimeout(timeout.current);//이전 휠 이벤트 제거
      timeout.current = setTimeout(function () {

        windowSize.current = getWindowDimensions();
        const { deltaY } = e;
        if (deltaY < 0) {
          moveUp()
        }
        else if (deltaY > 0) {
          moveDown()
        }

      }, 200);

    }


    const swipeDirection = (e) => {
      e.preventDefault();
      windowSize.current = getWindowDimensions();
      if (initialY !== null) {
        const currentY = `${e.touches ? e.touches[0].clientY : e.clientY}`;

        let diffY = initialY - currentY;

        if (diffY < 0) {
          moveUp()
        }
        else if (diffY > 0) {
          moveDown()
        }
        initialY = null;
      }
    }

    
    const handleResize = () => {
      windowSize.current = getWindowDimensions();
      setSectionHeight(windowSize.current)
      outerDivRef.current.style.transition = 'all 0s ease-in-out';
      outerDivRef.current.style.transform = `translateY(-${windowSize.current.height * scrollIndexLet}px)`;
    }
    

    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    const outerDivRefCurrent = outerDivRef.current;
    window.addEventListener(wheelEvent, wheelHandler, { passive: false });
    window.addEventListener('resize', handleResize);
    window.addEventListener("touchstart", initTouch, { passive: false });
    window.addEventListener('touchmove', swipeDirection, { passive: false });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener(wheelEvent, wheelHandler, { passive: false });
      window.removeEventListener('touchmove', swipeDirection, { passive: false });
    }
  }, [])

  // useEffect(() => {
  //   console.log("=== update window! === ")
  //   setWindowDimensions(getWindowDimensions())
  // }, [windowDimensions])


  return (
    <MainWrapper>
      <NavbarWrapper>
        <Navbar list={list} scrollTo={scrollTo} />
      </NavbarWrapper>
      <ContentWrapper ref={outerDivRef}>
        <SectionHome ref={scrollRefs.current[0]} height={windowSize.current.height} />
        <SectionIntro ref={scrollRefs.current[1]} height={windowSize.current.height} />
        <SectionCasterEque ref={scrollRefs.current[2]} height={windowSize.current.height} />
        <SectionCasterAo ref={scrollRefs.current[3]} height={windowSize.current.height} />
        <SectionCasterNina ref={scrollRefs.current[4]} height={windowSize.current.height} />
        <Dots scrollIndex={scrollIndexLet} />
        <SectionContactus ref={scrollRefs.current[5]} height={windowSize.current.height} />
      </ContentWrapper >
    </MainWrapper>
  )
}
