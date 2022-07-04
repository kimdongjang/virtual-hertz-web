import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Navbar from './component/Navbar';
import MainContainer from './container/MainContainer';
import LoadingContainer from './container/LoadingContainer';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const homeRef = useRef(null);
  const characterRef = useRef(null);

  const isLoading = useSelector(state => (state.isLoadingReducer.isLoading))

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
      <LoadingContainer isLoading={isLoading} />
      {!isLoading ? <div>
        <Navbar homeRef={homeRef} characterRef={characterRef} />
        <MainContainer />
      </div> : null}

    </div>

  );
}

export default App;
