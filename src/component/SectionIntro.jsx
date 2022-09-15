import React, { forwardRef } from "react";
import YouTube from 'react-youtube';

import { BsTwitter } from "react-icons/bs"


import tw from "tailwind-styled-components";

const IntroWrpper = tw.div`
    flex flex-col h-screen
`

const IntroTop = tw.div`
    flex justify-around bg-intro-top h-4
    p-8
    font-GmarketSans text-p-white font-medium text-2xl
`

const IntroEqueCard = tw.div`
    h-1/2
    flex flex-row justify-around  bg-eque-intro-card
    pl-16 pr-16
   
`
const IntroEqueCardInner = tw.div`
    flex flex-col h-auto justify-center
    max-w-xl    
`
const IntroEqueCardHeader = tw.div`
    py-4
    font-GmarketSans font-bold    
    text-p-black text-4xl
    underline underline-offset-8 decoration-[#f43f5e]
`
const IntroEqueCardText = tw.div`    
    font-GmarketSans font-medium text-2xl
    text-p-eque
`
const IntroEqueCardMovie = tw.div`
    flex items-center justify-center
`
// =============================================

const IntroAoCard = tw.div`
    h-1/2
    flex flex-row justify-around bg-ao-intro-card 
    pl-16 pr-16
`
const IntroAoCardInner = tw.div`
    flex flex-col h-auto justify-center
    max-w-xl
`
const IntroAoCardHeader = tw.div`
    py-4
    font-GmarketSans font-bold
    text-p-black text-4xl
    underline underline-offset-8 decoration-[#87b1e2]
`
const IntroAoCardText = tw.div`
    font-GmarketSans font-medium text-2xl
    text-p-ao
`
const IntroAoCardMovie = tw.div`
    flex items-center justify-center
`

const IntroCardInnerText = tw.p`
    font-NotoSansKR font-medium text-sm leading-tight
    
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
            <div className="h-screen">
                <IntroEqueCard>
                    <IntroEqueCardInner>
                        <IntroEqueCardHeader>E.Que - I, still</IntroEqueCardHeader>
                        <IntroEqueCardText>E.Que's 1st Digital Single "I, still"
                            I still, screaming..
                        </IntroEqueCardText>
                        <IntroCardInnerText>
                            Music by<br />
                            [Regle, Sahqmo (Virtual Hertz 'Music' team)]<br />
                            Regle&nbsp;
                            <BsTwitter className="inline-block cursor-pointer"
                                onClick={() => window.location.href = "https://twitter.com/Regle_tw"} />
                            <br />
                            Sahqmo&nbsp;
                            <BsTwitter className="inline-block cursor-pointer"
                                onClick={() => window.location.href = "https://twitter.com/Sahqmo"} />
                            <br />
                            <br />
                            Directed by<br />
                            송경민

                        </IntroCardInnerText>
                    </IntroEqueCardInner>
                    <IntroEqueCardMovie>
                        <YouTube videoId="qRPuQuVAoeA" opts={equeYoutubeOpt} />
                        {/* <img src="./images/test2.jpg" /> */}
                    </IntroEqueCardMovie>
                </IntroEqueCard>
                <IntroAoCard>
                    <IntroAoCardInner>
                        <IntroAoCardHeader>A.O - Dive To You</IntroAoCardHeader>
                        <IntroAoCardText>A.O's 1st Digital Single "Dive To You"
                            DIVE TO YOU!</IntroAoCardText>
                        <IntroCardInnerText>
                            Music by<br />
                            [Regle, Sahqmo (Virtual Hertz 'Music' team)]<br />
                            Regle&nbsp;
                            <BsTwitter className="inline-block cursor-pointer"
                                onClick={() => window.location.href = "https://twitter.com/Regle_tw"} />
                            <br />
                            Sahqmo&nbsp;
                            <BsTwitter className="inline-block cursor-pointer"
                                onClick={() => window.location.href = "https://twitter.com/Sahqmo"} />
                            <br />
                            <br />
                            Directed by<br />
                            송경민

                        </IntroCardInnerText>
                    </IntroAoCardInner>
                    <IntroAoCardMovie>
                        <YouTube videoId="90F6qTII73M" opts={aoYoutubeOpt} />
                        {/* <img src="./images/test2.jpg" /> */}
                    </IntroAoCardMovie>
                </IntroAoCard>
            </div>
        </IntroWrpper >
    )
})
export default SectionIntro;
