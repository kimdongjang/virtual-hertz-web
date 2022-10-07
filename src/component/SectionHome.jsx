import React, { forwardRef, useEffect } from "react";
import './sectionHome.css'

import tw from "tailwind-styled-components";
import PolygonContainer from "./svg/polygonContainer";

const BackMovieWrapper = tw.div`
   w-full h-screen flex flex-col snap-y
   
`
const SvgWrapper = tw.svg`
    absolute h-full w-full
`
const SectionWrapper = tw.div`
    flex items-center justify-center 
    flex-col md:flex-row
`

const BackMovie = tw.div`
   
`
const Movie = tw.video`
    h-screen w-full
`

const SectionHome = forwardRef((props, ref) => {
    return (
        <BackMovieWrapper ref={ref} className="backgroundPattern  w-full h-screen bg-opacity-60" style={{ height: props.height }}>

            <div>
                <SvgWrapper>
                    <svg></svg>
                    <PolygonContainer height={props.height} width={props.width} />
                </SvgWrapper>
            </div>
            {/* <BackMovie>
                <Movie src="./video/eque_pv.mp4" muted loop playsInline autoPlay />

            </BackMovie> */}
            {/* <div className="main-section__inner">
            <h2 className="">Virtual Hertz</h2>
            <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </div> */}
        </BackMovieWrapper >
    )
})
export default SectionHome;