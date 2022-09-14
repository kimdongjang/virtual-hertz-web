import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import './sectionCaster.css'

import tw from "tailwind-styled-components";
import SectionCasterEque from "./SectionCasterEque";
import SectionCasterAo from "./SectionCasterAo";

const CasterWrapper = tw.div`
    w-full flex flex-col
`

const IntroTop = tw.div`
    flex justify-around bg-intro-top h-4
    p-8
    font-GmarketSans text-p-white font-medium text-2xl
`

const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterImage = tw.img`
    m-8
`


const SectionCharacter = forwardRef((prpos, ref) => {
    return (
        <CasterWrapper ref={ref}>
            <IntroTop>
                <h1>Caster</h1>
                <div>

                </div>

            </IntroTop>
            <SectionCasterEque />
            <SectionCasterAo />
        </CasterWrapper >
    );
}
);

export default SectionCharacter;