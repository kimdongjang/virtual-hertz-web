import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Navbar from './component/Navbar';
import MainContainer from './container/MainContainer';
import LoadingContainer from './container/LoadingContainer';
import { useSelector, useDispatch } from 'react-redux';

/**
 * 앱 초기 시작점
 * @returns 
 */
function App() {
  const isLoading = useSelector(state => (state.isLoadingReducer.isLoading))
  const [isLoad, setIsLoad] = useState(false);

  // function handleScroll(e) {
  //   const { innerHeight } = window;
  //   const { scrollHeight } = document.body;
  //   const myScroll = e.srcElement.scrollingElement.scrollTop;
  //   console.log('전체 body 의 높이 : ' + scrollHeight);
  //   console.log('전체 스크롤바 높이 : ' + innerHeight);
  //   console.log('현재 스크롤 위치 : ' + myScroll);

  //   // if (ScrollY) {
  //   //   setScrollY(window.pageYOffset);
  //   // } else {
  //   //   setScrollY(window.pageYOffset);
  //   // }
  // }
  // useEffect(() => {
  //   function scrollListener() {
  //     window.addEventListener("scroll", handleScroll);
  //   } //  window 에서 스크롤을 감시 시작
  //   scrollListener(); // window 에서 스크롤을 감시    
  // });
  useEffect(() => {
    console.log("부모 : " + isLoad);
  }, [isLoad])
  return (<>
    <MainContainer />
    {/* <LoadingContainer isLoading={isLoading} isLoad={isLoad} setIsLoad={setIsLoad} />
    {!isLoading ? <MainContainer />  : null} */}
  </>
  );
}

export default App;
