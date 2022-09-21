import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    h-screen flex  items-center justify-center 
    flex-col md:flex-row
`

const CasterImageWrapper = tw.div`
    
`
const AudioPlayerWrapper = tw.div`
    max-w-xs md:max-w-sm m-2
`

const CasterImage = tw.img`
    h-[410px] pt-12
`

const CasterSectionInner = tw.div`
    flex flex-col m-2 max-h-max
`
const CasterSectionHeaderDeco = tw.div`
    w-1 h-7
    ml-1
`
const CasterSectionHeader = tw.div`
    ml-2
    flex justify-center items-center
    font-NotoSansKR w-12 h-6
    text-white bg-blue-200 rounded-md
    text-xs
    hover:bg-blue-300 focus:outline-none focus:shadow-outline    
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-light
    text-[6px] sm:text-sm md:text-md lg:text-lg 
    max-w-md
    p-2
`
const CasterTwitterLink = tw.div`
    flex justify-between items-center
    border-2 border-solid border-blue-300
    max-w-xs
    p-2 my-1 mx-4 lg:p-4 lg:my-2
    text-xs md:text-md  lg:text-lg
    font-GmarketSans 
`




const SectionCasterAo = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <CasterImageWrapper>
                <CasterImage src="./images/caster/ao2.jpg" />
            </CasterImageWrapper>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <CasterSectionHeaderDeco style={{ background: '#CCDFF4' }} />
                    <CasterSectionHeader>AO</CasterSectionHeader>
                </div>
                <CasterInnerText>필승! 아오임당~ 🐟︎  먀먀- @stu_diho ⚓️
                </CasterInnerText>

                <CasterTwitterLink className="hover:cursor-pointer"
                    onClick={() => window.location.href = "http://twitch.tv/vhz_ao"} >
                    방송채널 바로가기
                    <FaArrowRight color="#BFDBFE" />
                </CasterTwitterLink>
                <CasterTwitterLink className="hover:cursor-pointer"
                    onClick={() => window.location.href = "https://twitter.com/VHZ_AO"} >
                    트위터 바로가기
                    <FaArrowRight color="#BFDBFE" />
                </CasterTwitterLink>
            </CasterSectionInner>
        </SectionWrapper>
    )
}
)

export default SectionCasterAo;