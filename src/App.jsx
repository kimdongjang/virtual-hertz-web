import React, { useEffect, useRef, useState } from 'react';
import ReactPageScroller from "react-page-scroller";
import './index.css';
import SectionHome from './component/SectionHome';
import Navbar from './component/Navbar';
import SectionIntro from './component/SectionIntro';
import ThirdSection from './component/ThirdSection';
import Landing from './component/Landing';
import { First } from 'react-bootstrap/esm/PageItem';
import MainContainer from './container/MainContainer';

function App() {
  const homeRef = useRef(null);
  const characterRef = useRef(null);

  function handleScroll(e) {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const myScroll = e.srcElement.scrollingElement.scrollTop;
    console.log('전체 body 의 높이 : ' + scrollHeight);
    console.log('전체 스크롤바 높이 : ' + innerHeight);
    console.log('현재 스크롤 위치 : ' + myScroll);

    // if (ScrollY) {
    //   setScrollY(window.pageYOffset);
    // } else {
    //   setScrollY(window.pageYOffset);
    // }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시    
  });
  return (
    <div>
      <Navbar homeRef={homeRef} characterRef={characterRef} />
      <MainContainer />
      <SectionIntro ref={characterRef} />
      {/* <ThirdSection /> */}
    </div>

  );
}

export default App;
