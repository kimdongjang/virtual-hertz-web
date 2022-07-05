
import React, { createRef, useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import SectionCharacter from "../component/SectionCharacter";
import SectionHome from "../component/SectionHome";
import SectionIntro from "../component/SectionIntro";
import './mainContainer.css'

export default function MainContainer() {
    const scrollRefs = useRef([]);
    

    /**
     * navigation 리스트 별로 ref 초기화
     */
    const list = ["HOME", "INTRODUCE", "CHARACTER"];
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
    
    useEffect(()=>{      
      // window.addEventListener("scroll", scrollHandler, true);
      return () => {
        // window.removeEventListener("scroll", scrollHandler, true);
      };
        // alert([...Array(list.length).keys()]);
    },[])

    return (
        <div>
            <div>
                <Navbar list={list} scrollTo={scrollTo}/>
            </div>
            <div className="main-container">
                <SectionHome  ref={scrollRefs.current[0]}  />
                <SectionIntro  ref={scrollRefs.current[1]} />
                <SectionCharacter  ref={scrollRefs.current[2]}/>
            </div>
        </div>
    )
}
