import React, { forwardRef } from "react";
import './sectionIntro.css'
import YouTube from 'react-youtube';


import tw from "tailwind-styled-components";

const IntroWrpper = tw.div`
    w-full h-full flex flex-col justify-center bg-bg-intro
`
const IntroCard = tw.div`
    flex flex-row justify-center h-auto
`
const IntroCardInner = tw.div`
    flex flex-col justify-center h-auto m-8 
`
const IntroCardText = tw.div`
    font-GmarketSans font-bold
    p-4 m-4 text-p-white
`

const SectionIntro = forwardRef((prpos, ref) => {
    const equeYoutubeOpt = {
        height: '270',
        width: '480',
        playerVars: {
        }
    }
    const aoYoutubeOpt = {
        height: '270',
        width: '480',
        playerVars: {
        }
    }

    return (
        <IntroWrpper ref={ref}>
            <IntroCard>
                <IntroCardInner>
                    <h2 className="">Virtual Hertz</h2>
                    <IntroCardText>E.Que's 1st Digital Single "I, still"
                        I still, screaming..
                    </IntroCardText>
                </IntroCardInner>
                <div className="intro-section__img">
                    <YouTube videoId="qRPuQuVAoeA" opts={equeYoutubeOpt} />
                    {/* <img src="./images/test2.jpg" /> */}
                </div>
            </IntroCard>
            <IntroCard>
                <IntroCardInner>
                    <h2 className="">Virtual Hertz</h2>
                    <IntroCardText>Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</IntroCardText>
                </IntroCardInner>
                <div className="intro-section__img">
                    <YouTube videoId="90F6qTII73M" opts={aoYoutubeOpt} />
                    {/* <img src="./images/test2.jpg" /> */}
                </div>
            </IntroCard>
        </IntroWrpper>
    )
})
export default SectionIntro;
