import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center  items-center snap-y
    flex-col md:flex-row
`

const CasterImageWrapper = tw.div`
h-2/3
`

const AudioPlayerWrapper = tw.div`
    max-w-xs md:max-w-sm m-2
`
const CasterImage = tw.img`
    h-full p-8
`
const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`
const CasterSectionHeader = tw.div`
    flex justify-center items-center
    font-NotoSansKR w-16 h-8
    text-white bg-gray-200 rounded-md
    hover:bg-gray-300 focus:outline-none focus:shadow-outline    
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-medium text-sm lg:text-lg leading-tight
    max-w-md
    p-4
`
const CasterTwitterLink = tw.div`
    flex justify-between items-center
    border-2 border-solid border-gray-700  
    w-48 md:w-96
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
                    <CasterSectionHeader >Nina</CasterSectionHeader>
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