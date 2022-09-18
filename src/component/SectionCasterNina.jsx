import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center 
`

const CasterImageWrapper = tw.div`
    h-full 
`

const CasterImage = tw.img`
    p-8 h-full
`
const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-medium text-sm lg:text-md leading-tight
    max-w-sm
    p-4
`
const CasterTwitterLink = tw.div`
flex justify-between items-center
border-2 border-solid border-gray-700
w-48 lg:w-96 max-w-sm
p-2 my-1 mx-4 lg:p-4 lg:my-2
text-sm md:text-md  lg:text-lg
font-GmarketSans 

`






const SectionCasterNina = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <CasterImageWrapper>
                <CasterImage src="./images/caster/nina2.jpg" />
            </CasterImageWrapper>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <div className="caster-section__title-deco" style={{ background: '#374151' }} />
                    <h2 className="">Nina</h2>
                </div>
                <CasterInnerText> ???
                </CasterInnerText>
                <div>
                    {/* <ReactAudioPlayer src="./audio/ao.mp3" controls /> */}
                </div>
                <CasterTwitterLink className="hover:cursor-pointer text-gray-300"
                    onClick={() => window.location.href = "https://www.twitch.tv/e_que_"} >
                    방송채널 바로가기
                    <FaArrowRight color="#D1D5DB" />
                </CasterTwitterLink>
                <CasterTwitterLink className="hover:cursor-pointer"
                    onClick={() => window.location.href = "https://twitter.com/VHZ_EQue"} >
                    트위터 바로가기
                    <FaArrowRight color="#374151" />
                </CasterTwitterLink>
            </CasterSectionInner>
        </SectionWrapper>
    )
}
)

export default SectionCasterNina;