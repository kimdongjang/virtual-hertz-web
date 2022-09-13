import React, { forwardRef } from "react";
import './sectionIntro.css'
import YouTube from 'react-youtube';


import tw from "tailwind-styled-components";

const IntroWrpper = tw.div`
    w-full h-screen flex flex-col justify-center 
`

const IntroTop = tw.div`
    flex justify-around bg-intro-top h-auto
    p-8
    font-GmarketSans text-p-white font-medium text-2xl
`

const IntroEqueCard = tw.div`
    flex flex-row justify-around h-auto bg-eque-intro-card
    p-32
`
const IntroEqueCardInner = tw.div`
    flex flex-col justify-center h-auto m-8 
    max-w-4xl
`
const IntroEqueCardHeader = tw.div`
    font-GmarketSans font-bold
    p-4 m-4
    text-p-black text-4xl
`
const IntroEqueCardText = tw.div`
    font-GmarketSans font-medium
    p-4 m-4 text-p-eque
`
// =============================================

const IntroAoCard = tw.div`
    flex flex-row justify-around h-auto bg-ao-intro-card 
    p-32
`
const IntroAoCardInner = tw.div`
    flex flex-col justify-center h-auto m-8 
    max-w-4xl
`
const IntroAoCardHeader = tw.div`
    font-GmarketSans font-bold
    p-4 m-4 text-p-black text-4xl
`
const IntroAoCardText = tw.div`
    font-GmarketSans font-medium
    p-4 m-4 text-p-ao
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
            {/* <IntroTop>
                <h1>Ofiicial Music Video</h1>
                <div>

                </div>
            </IntroTop> */}
            <IntroEqueCard>
                <IntroEqueCardInner>
                    <IntroEqueCardHeader>E.Que - I, still</IntroEqueCardHeader>
                    <IntroEqueCardText>E.Que's 1st Digital Single "I, still"
                        I still, screaming..
                    </IntroEqueCardText>
                </IntroEqueCardInner>
                <div className="intro-section__img">
                    <YouTube videoId="qRPuQuVAoeA" opts={equeYoutubeOpt} />
                    {/* <img src="./images/test2.jpg" /> */}
                </div>
            </IntroEqueCard>
            <IntroAoCard>
                <IntroAoCardInner>
                    <IntroAoCardHeader>A.O - Dive To You</IntroAoCardHeader>
                    <IntroAoCardText>A.O's 1st Digital Single "Dive To You"
                        DIVE TO YOU!</IntroAoCardText>
                </IntroAoCardInner>
                <div className="intro-section__img">
                    <YouTube videoId="90F6qTII73M" opts={aoYoutubeOpt} />
                    {/* <img src="./images/test2.jpg" /> */}
                </div>
            </IntroAoCard>
        </IntroWrpper>
    )
})
export default SectionIntro;
