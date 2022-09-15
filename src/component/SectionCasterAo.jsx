import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";

import tw from "tailwind-styled-components";

const SectionWrapper = tw.div`
    flex h-screen justify-center 
`

const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterSectionHeader = tw.div`
    flex justify-center items-center
    font-NotoSansKR w-16 h-8
    text-white bg-blue-200 rounded-md
    hover:bg-blue-400 focus:outline-none focus:shadow-outline    
`

const CasterImage = tw.img`
    p-16 h-full
`
const CasterInnerText = tw.p`
    font-NotoSansKR font-medium text-sm leading-tight
    max-w-sm
    p-4
`



const SectionCasterAo = forwardRef((prpos, ref) => {
    return (
        <SectionWrapper ref={ref}>
            <div>
                <CasterImage src="./images/caster/ao2.jpg" />
            </div>
            <CasterSectionInner>
                <div className="caster-section__title">
                    <div className="caster-section__title-deco" style={{ background: '#CCDFF4' }} />
                    <CasterSectionHeader>AO</CasterSectionHeader>
                </div>
                <CasterInnerText>필승! 아오임당~ 🐟︎
                    Twitch - http://twitch.tv/vhz_ao ⚓️ 회사-
                    @VHZ_ent
                    ⚓️
                    먀먀-
                    @stu_diho
                    ⚓️
                </CasterInnerText>
                <div>
                    <ReactAudioPlayer
                        src="./audio/ao.mp3" controls
                    />
                </div>
            </CasterSectionInner>
        </SectionWrapper>
    )
}
)

export default SectionCasterAo;