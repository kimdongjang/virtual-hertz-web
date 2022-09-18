import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center items-center snap-y
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
    text-white bg-blue-200 rounded-md
    hover:bg-blue-300 focus:outline-none focus:shadow-outline    
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-medium leading-tight
    text-xs sm:text-sm md:text-md lg:text-lg 
    max-w-xs
    p-4
`
const CasterTwitterLink = tw.div`
flex justify-between items-center
border-2 border-solid border-blue-300
max-w-xs
p-2 my-1 mx-4 lg:p-4 lg:my-2
text-sm md:text-md  lg:text-lg
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
                    <div className="caster-section__title-deco" style={{ background: '#CCDFF4' }} />
                    <CasterSectionHeader>AO</CasterSectionHeader>
                </div>
                <CasterInnerText>필승! 아오임당~ 🐟︎ <br />
                    먀먀-
                    @stu_diho
                    ⚓️
                </CasterInnerText>
                <AudioPlayerWrapper>
                    <ReactAudioPlayer src="./audio/ao.mp3" controls />
                </AudioPlayerWrapper>

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