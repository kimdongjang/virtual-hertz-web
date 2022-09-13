import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-1/2
`

const EqueCasterIntroduce = tw.div`
    rotate-3
    bg-[#483440]
    border-yellow-900
    border-4    
    underline
    underline-offset-2
    decoration-dashed
    font-GmarketSans font-medium text-2xl
    p-4 m-4 text-p-default  
    decoration-[#291723]
    text-center
`
const EqueCasterIntroduceHighlight = tw.p`
    inline-block
    underline
    underline-offset-2
    decoration-dashed
    font-GmarketSans font-medium
    text-p-highlight
    decoration-[#291723]
`
const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterImage = tw.img`
    m-8
`


const SectionCasterEque = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <div className="caster-section__card">
                <div className="caster-section__img">
                    <CasterImage src="./images/caster/eque1.png" />
                </div>
                <CasterSectionInner>
                    <div className="caster-section__title">
                        <div className="caster-section__title-deco" style={{ background: '#FCCAD7' }} />
                        <h2 className="">Eque</h2>
                    </div>
                    <EqueCasterIntroduce>
                        어느 공장에서 만들어진 스피커!&nbsp;
                        <EqueCasterIntroduceHighlight>요상한 모자를 쓴 고양의 마법</EqueCasterIntroduceHighlight>으로&nbsp;
                        <EqueCasterIntroduceHighlight> 사람</EqueCasterIntroduceHighlight>이 되었다!<br />
                        폐기장 근처 놀이터에서 버스킹을 하다가&nbsp;
                        <EqueCasterIntroduceHighlight>길거리 캐스팅</EqueCasterIntroduceHighlight>을 당해<br />
                        <EqueCasterIntroduceHighlight>버츄얼 헤르츠</EqueCasterIntroduceHighlight>에 합류하게 된다!
                    </EqueCasterIntroduce>
                    <div>
                        <ReactAudioPlayer
                            src="./audio/eque.mp3" controls
                        />
                    </div>
                </CasterSectionInner>
            </div>
        </SectionWrapper>
    )
}
)

export default SectionCasterEque;