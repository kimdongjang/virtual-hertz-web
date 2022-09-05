import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import './sectionCharacter.css'

import tw from "tailwind-styled-components";

const CasterSectionInner = tw.div`
    flex flex-col justify-center 
`

const CasterImage = tw.img`
    m-8
`

const SectionCharacter = forwardRef((prpos, ref) => {
    return (
        <div className="caster-section" ref={ref}>
            <div className="caster-section__bg">
                <div className="caster-section__card">
                    <div className="caster-section__img">
                        <CasterImage src="./images/caster/eque1.png" />
                    </div>
                    <CasterSectionInner>
                        <div className="caster-section__title">
                            <div className="caster-section__title-deco" style={{ background: '#FCCAD7' }} />
                            <h2 className="">Eque</h2>
                        </div>
                        <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                        <div>
                            <ReactAudioPlayer
                                src="my_audio_file.ogg"
                                autoPlay
                                controls
                            />
                        </div>
                    </CasterSectionInner>
                </div>
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
            </div>
        </div >
    );
}
);

export default SectionCharacter;