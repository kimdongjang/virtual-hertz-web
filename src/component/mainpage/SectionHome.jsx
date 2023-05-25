import React, { forwardRef, useEffect } from "react";
import './sectionHome.css'

import tw from "tailwind-styled-components";
import PolygonContainer from "../svg/polygonContainer";

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
        <BackMovieWrapper ref={ref} className="backgroundPattern  w-full h-screen bg-opacity-60 " style={{ height: props.height }}>
            <SvgWrapper>
                <svg></svg>
                <PolygonContainer height={props.height} width={props.width} />
            </SvgWrapper>
            <div className="flex flex-col justify-center items-center h-full mr-96">
                <div>
                    <div className="m-4 font-NotoSansKR font-bold lg:text-xl xl:text-2xl 2xl:text-4xl text-left ">
                        <span className=" text-[#363636]">꿈꾸던 일을 현실로!</span>
                        <span>
                            <img src="./images/background/logo.png" className="w-32 xl:w-48 m-6" />
                        </span>

                    </div>


                    <div className="m-4 font-NotoSansKR lg:text-lg xl:text-xl 2xl:text-2xl  text-left" >
                        <span className="font-bold  text-[#FF4E7E]">
                            Virtual Hertz Ent
                        </span>
                        <span className="                   
                      text-[#363636]">
                            는 급속도로 성장하고 있는<br /> 버추얼 문화산업의 가능성을 보고<br />
                            자체적인 IP를 생산하고 있는 버츄얼 프로덕션입니다.<br />

                            기존의 V-tuber 에이전시들이 먼저 걸어간 발자취를 막연히 따라가는 것보다<br />
                            서브컬쳐 문화의 심도있는 이해와<br />
                            자체적인 콘텐츠 제작을 통해 독보적인 브랜드 구축을 꾀하고자 합니다.</span>
                        <span>

                        </span>


                    </div>
                </div>
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