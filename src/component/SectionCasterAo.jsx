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


const SectionCasterAo = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <div className="caster-section__card">
                <div className="caster-section__img">
                    <CasterImage src="./images/caster/ao1.png" />
                </div>
                <CasterSectionInner>
                    <div className="caster-section__title">
                        <div className="caster-section__title-deco" style={{ background: '#CCDFF4' }} />
                        <h2 className="">AO</h2>
                    </div>
                    <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    <div>
                        <ReactAudioPlayer
                            src="./audio/ao.mp3" controls
                        />
                    </div>
                </CasterSectionInner>
            </div>
        </SectionWrapper>
    )
}
)

export default SectionCasterAo;