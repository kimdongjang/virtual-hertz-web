import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center 
`

const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterImage = tw.img`
    p-16 h-full
`
const CasterInnerText = tw.p`
    font-NotoSansKR font-medium text-sm leading-tight
    max-w-sm
    p-4
`



const SectionCasterNina = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <div>
                <CasterImage src="./images/caster/nina2.jpg" />
            </div>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <div className="caster-section__title-deco" style={{ background: '#CCDFF4' }} />
                    <h2 className="">Nina</h2>
                </div>
                <CasterInnerText> ???
                </CasterInnerText>
                <div>
                    {/* <ReactAudioPlayer src="./audio/ao.mp3" controls /> */}
                </div>
            </CasterSectionInner>
        </SectionWrapper>
    )
}
)

export default SectionCasterNina;