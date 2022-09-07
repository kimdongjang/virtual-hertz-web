import React, { forwardRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import './sectionCharacter.css'

import tw from "tailwind-styled-components";


const EqueCasterIntroduce = tw.div`
    rotate-3
    bg-[#483440]
    border-yellow-900
    border-4
    p-4 m-4 text-white
    underline
    decoration-black
    decoration-dashed
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
                        <EqueCasterIntroduce>어느 공장에서 만들어진 스피커!
                            요상한 모자를 쓴 고양의 마법으로 사람이 되었다!
                            폐기장 근처 놀이터에서 버스킹을 하다가
                            길거리 캐스팅을 당해 버츄얼 헤르츠에 합류하게 된다!
                        </EqueCasterIntroduce>
                        <div>
                            <ReactAudioPlayer
                                src="./audio/eque.mp3" controls
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