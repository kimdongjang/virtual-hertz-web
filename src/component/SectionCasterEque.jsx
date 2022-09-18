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
    text-white bg-red-200 rounded-md
    hover:bg-red-300 focus:outline-none focus:shadow-outline    
`

const CasterInnerText = tw.p`
    font-NotoSansKR font-medium leading-tight
    text-xs sm:text-sm md:text-md lg:text-lg 
    max-w-md
    p-4
`
const CasterTwitterLink = tw.div`
    flex justify-between items-center
    border-2 border-solid border-red-300
    max-w-xs
    p-2 my-1 mx-4 lg:p-4 lg:my-2
    text-sm md:text-md  lg:text-lg
    font-GmarketSans 
`



const SectionCasterEque = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <CasterImageWrapper>
                <CasterImage src="./images/caster/eque2.jpg" />
            </CasterImageWrapper>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <div className="caster-section__title-deco" style={{ background: '#FCCAD7' }} />
                    <CasterSectionHeader>Eque</CasterSectionHeader>
                </div>
                <CasterInnerText>
                    첫 번째 프로젝트! 이큐 에요! ٩(๑˙꒳˙๑)۶♥ <br />
                    매주 수,금,토,일 오후 8시 20분 뱅온♥ <br />
                    공지는 트위터에서! (@VHZ_EQue) <br />
                    Contact Us - v.hzent@gmail.com
                </CasterInnerText>
                {/* <EqueCasterIntroduce>
                    어느 공장에서 만들어진 스피커!&nbsp;
                    <EqueCasterIntroduceHighlight>요상한 모자를 쓴 고양의 마법</EqueCasterIntroduceHighlight>으로&nbsp;
                    <EqueCasterIntroduceHighlight> 사람</EqueCasterIntroduceHighlight>이 되었다!<br />
                    폐기장 근처 놀이터에서 버스킹을 하다가&nbsp;
                    <EqueCasterIntroduceHighlight>길거리 캐스팅</EqueCasterIntroduceHighlight>을 당해<br />
                    <EqueCasterIntroduceHighlight>버츄얼 헤르츠</EqueCasterIntroduceHighlight>에 합류하게 된다!
                </EqueCasterIntroduce> */}
                <AudioPlayerWrapper>
                    <ReactAudioPlayer src="./audio/eque.mp3" controls
                    />
                </AudioPlayerWrapper>
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
        </SectionWrapper>
    )
}
)

export default SectionCasterEque;