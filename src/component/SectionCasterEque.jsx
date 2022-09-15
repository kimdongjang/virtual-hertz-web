import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center 
`

// const EqueCasterIntroduce = tw.div`
//     rotate-3
//     bg-[#483440]
//     border-yellow-900
//     border-4    
//     underline
//     underline-offset-2
//     decoration-dashed
//     font-GmarketSans font-medium text-2xl
//     p-4 m-4 text-p-default  
//     decoration-[#291723]
//     text-center
// `
// const EqueCasterIntroduceHighlight = tw.p`
//     inline-block
//     underline
//     underline-offset-2
//     decoration-dashed
//     font-GmarketSans font-medium
//     text-p-highlight
//     decoration-[#291723]
// `
const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`
const CasterSectionHeader = tw.div`
    flex justify-center items-center
    font-NotoSansKR w-16 h-8
    text-white bg-red-200 rounded-md
    hover:bg-red-400 focus:outline-none focus:shadow-outline    
`

const CasterImage = tw.img`
    p-16 h-full
`
const CasterInnerText = tw.p`
    font-NotoSansKR font-medium text-sm leading-tight
    max-w-sm
    p-4
`



const SectionCasterEque = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <div className="caster-section__img">
                <CasterImage src="./images/caster/eque2.jpg" />
            </div>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <div className="caster-section__title-deco" style={{ background: '#FCCAD7' }} />
                    <CasterSectionHeader>Eque</CasterSectionHeader>
                </div>
                <CasterInnerText>
                    첫 번째 프로젝트! 이큐 에요! ٩(๑˙꒳˙๑)۶♥ / 매주 수,금,토,일 오후 8시 20분 뱅온♥ / 공지는 트위터에서! (@VHZ_EQue) / Contact Us - v.hzent@gmail.com
                </CasterInnerText>
                {/* <EqueCasterIntroduce>
                    어느 공장에서 만들어진 스피커!&nbsp;
                    <EqueCasterIntroduceHighlight>요상한 모자를 쓴 고양의 마법</EqueCasterIntroduceHighlight>으로&nbsp;
                    <EqueCasterIntroduceHighlight> 사람</EqueCasterIntroduceHighlight>이 되었다!<br />
                    폐기장 근처 놀이터에서 버스킹을 하다가&nbsp;
                    <EqueCasterIntroduceHighlight>길거리 캐스팅</EqueCasterIntroduceHighlight>을 당해<br />
                    <EqueCasterIntroduceHighlight>버츄얼 헤르츠</EqueCasterIntroduceHighlight>에 합류하게 된다!
                </EqueCasterIntroduce> */}
                <div>
                    <ReactAudioPlayer src="./audio/eque.mp3" controls
                    />
                </div>
            </CasterSectionInner>
        </SectionWrapper>
    )
}
)

export default SectionCasterEque;