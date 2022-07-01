import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './index.css';
import FirstSection from './component/FirstSection';
import Navbar from './component/Navbar';
import SecondSection from './component/SecondSection';
import ThirdSection from './component/ThirdSection';
import Landing from './component/Landing';
import { First } from 'react-bootstrap/esm/PageItem';

function App() {
  const goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  return (
    <React.Fragment>
      <Navbar />
      <ReactPageScroller>
        <FirstSection />
         <Landing />
        <SecondSection />
        <ThirdSection />
        {/*
      
      <React.Fragment>
        <ReactPageScroller>
          <FirstSection />
          <SecondSection />
          <ThirdSection /> */}

      </ReactPageScroller>
    </React.Fragment>

  );
}

export default App;
