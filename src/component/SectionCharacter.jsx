import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import './sectionCharacter.css'

import tw from "tailwind-styled-components";
import SectionCasterEque from "./SectionCasterEque";
import SectionCasterAo from "./SectionCasterAo";


const IntroTop = tw.div`
    flex justify-around bg-intro-top
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
        <div className="caster-section" ref={ref}>
            <IntroTop>
                <h1>Caster</h1>
                <div>

                </div>

            </IntroTop>
            <SectionCasterEque/>
            <SectionCasterAo/>
        </div >
    );
}
);

export default SectionCharacter;