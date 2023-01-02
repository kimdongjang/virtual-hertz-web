import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center  items-center snap-y
    flex-col md:flex-row
    bg-green-50
`

const CasterImageWrapper = tw.div`
`

const CasterImage = tw.img`
pt-12 lg:p-8
`
const CasterSectionInner = tw.div`
    flex flex-col justify-center lg:max-w-[340px]
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
    w-48 md:w-[300px]
    p-2 my-1 mx-4 lg:p-4 lg:my-2
    text-sm md:text-md  lg:text-lg
    font-GmarketSans 

`






const SectionCasterNina = forwardRef((props, ref) => {
    return (
        <SectionWrapper ref={ref} style={{ height: props.height }}>
            <CasterImageWrapper>
                <CasterImage src="./images/caster/nina2.jpg" style={{ height: props.height * 0.7 }} />
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