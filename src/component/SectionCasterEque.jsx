import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaArrowRight } from "react-icons/fa"

import tw from "tailwind-styled-components";
import PolygonContainer from "./svg/polygonContainer";

const SectionWrapper = tw.div`
    flex items-center justify-center 
    flex-col md:flex-row
`

const AudioPlayerWrapper = tw.div`
    max-w-xs md:max-w-sm m-2
`

const CasterImageWrapper = tw.div`
    
`
const CasterImage = tw.img`
    pt-12  lg:p-8
`

const SvgWrapper = tw.svg`
    absolute h-full w-full
`

const CasterSectionInner = tw.div`
    lg:max-w-[340px]
`
const CasterSectionHeaderDeco = tw.div`
    w-1 h-7
    ml-1
`
const CasterSectionHeader = tw.div`
    ml-2
    flex justify-center items-center
    font-NotoSansKR w-12 h-6
    text-white bg-red-200 rounded-md
    text-xs
    hover:bg-red-300 focus:outline-none focus:shadow-outline    
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-medium
    text-[6px] sm:text-sm md:text-md lg:text-lg 
    max-w-md
    p-2
`
const CasterTwitterLink = tw.div`
    flex justify-between items-center
    border-2 border-solid border-red-300
    max-w-xs
    p-2 my-1 mx-4 lg:p-4 lg:my-2
    text-xs md:text-md  lg:text-lg
    font-GmarketSans 
`



const SectionCasterEque = forwardRef((props, ref) => {
    const stylePolygon = {
        fill: "#f43f5e",
        opacity: 0.5,
    }
    const topTriangle = `0,0 ${props.width},0 ${props.width},${props.height / 2}`
    const bottomTriangle = `0,${props.height} ${props.width},${props.height} ${props.width},${props.height / 2}`
    console.log(topTriangle)
    return (
        <div>
            <SvgWrapper>
                <svg>
                    <polygon points={topTriangle} style={stylePolygon} />
                    <polygon points={bottomTriangle} style={stylePolygon} />
                </svg>
                <PolygonContainer height={props.height} width={props.width} />
            </SvgWrapper>
            <SectionWrapper ref={ref} style={{ height: props.height }}>

            </SectionWrapper>

            {/* <SectionWrapper ref={ref} style={{ height: props.height }}>
                <CasterImageWrapper>
                    <CasterImage src="./images/caster/eque2.jpg" style={{ height: props.height * 0.7 }} />
                </CasterImageWrapper>
                <CasterSectionInner>
                    <div className="caster-section__title">
                        <CasterSectionHeaderDeco style={{ background: '#FCCAD7' }} />
                        <CasterSectionHeader>Eque</CasterSectionHeader>
                    </div>
                    <CasterInnerText>
                        첫 번째 프로젝트! 이큐 에요! ٩(๑˙꒳˙๑)۶♥ <br />
                        매주 수,금,토,일 오후 8시 20분 뱅온♥ <br />
                        공지는 트위터에서! (@VHZ_EQue) <br />
                        Contact Us - v.hzent@gmail.com
                    </CasterInnerText>
                    <CasterTwitterLink className="hover:cursor-pointer"
                        onClick={() => window.location.href = "https://www.twitch.tv/e_que_"} >
                        방송채널 바로가기
                        <FaArrowRight color="#FCA5A5" />
                    </CasterTwitterLink>
                    <CasterTwitterLink className="hover:cursor-pointer"
                        onClick={() => window.location.href = "https://twitter.com/VHZ_EQue"} >
                        트위터 바로가기
                        <FaArrowRight color="#FCA5A5" />
                    </CasterTwitterLink>
                </CasterSectionInner>
            </SectionWrapper> */}
        </div>
    )
}
)

export default SectionCasterEque;