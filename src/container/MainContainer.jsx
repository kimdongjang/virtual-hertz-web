
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
      scrollRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
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
      // alert(scrollRefs.current)
      // alert(scrollRefs)
      
      window.addEventListener("scroll", scrollHandler, true);
      return () => {
        window.removeEventListener("scroll", scrollHandler, true);
      };
        // alert([...Array(list.length).keys()]);
    },[])


    const homeRef = useRef();
    const introRef = useRef();
    const characterRef = useRef();
    const homeClick = () => {
      homeRef.current?.scrollIntoView({behavior: 'smooth'});
      console.log("home")
    }
    const introClick = () => {
      introRef.current?.scrollIntoView({behavior: 'smooth'});
      console.log("intro")
    }
    const characterClick = () => {
      characterRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            <div>
                <Navbar homeClick={homeClick} introClick={introClick} characterClick={characterClick} />
            </div>
            <div className="main-container">
                <SectionHome  ref={homeRef}  />
                <SectionIntro  ref={introRef} />
                <SectionCharacter  ref={characterRef}/>
            </div>
        </div>
    )
}
