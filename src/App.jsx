import React from 'react';
import ReactPageScroller from "react-page-scroller";
import './index.css';
import FirstSection from './component/FirstSection';
import Navbar from './component/Navbar';
import SecondSection from './component/SecondSection';
import ThirdSection from './component/ThirdSection';

function App() {
  const goToPage = (pageNumber) => {
    this.reactPageScroller.goToPage(pageNumber);
  };
  return (
    <div>
      <Navbar />
      <React.Fragment>
        <ReactPageScroller>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </ReactPageScroller>
      </React.Fragment>
    </div>
  );
}

export default App;
