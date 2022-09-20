import React, { forwardRef, useEffect, useRef, useState } from "react";
import { BsTwitter } from "react-icons/bs"


import tw from "tailwind-styled-components";
import useWindowResize from "../hooks/useWindowResize";
import ReactPlayer from "react-player";

const IntroWrpper = tw.div`
    flex flex-col h-screen justify-evenly snap-y
`

const IntroTop = tw.div`
    flex justify-around bg-intro-top h-4
    p-8
    font-GmarketSans text-p-white font-medium text-2xl
`

const IntroCard = tw.div`
    h-1/2
    flex flex-col lg:flex-row lg:items-center    
    pl-16 pr-16
    py-8

    bg-eque-intro-card
   
`
const IntroInner = tw.div`
    flex-col w-full
`
const IntroInnerHeader = tw.div`
    py-4
    font-GmarketSans font-bold    
    text-p-black text-xl
    lg:text-4xl
    underline underline-offset-8 decoration-[#f43f5e]
    
`
const IntroInnerMiddleText = tw.div`    
    font-GmarketSans font-medium
    text-md lg:text-2xl
    max-w-md lg:max-w-2xl xl:max-w-2xl
`

const IntroInnerText = tw.p`
    font-NotoSansKR font-medium
     text-sm lg:text-lg
     leading-tight    
`

const IntroCardMovie = tw.div`
    flex items-center
    justify-center
    w-full h-full
    py-8 lg:py-16 lg:px-8
`
// =============================================

const IntroAoCard = tw.div`
    h-1/2
    flex flex-col lg:flex-row bg-eque-intro-card
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



const SectionIntro = forwardRef((prpos, ref) => {
    const [windowHeight, setWindowHeight] = useState();
    const [windowWidth, setWindowWidth] = useState();
    const [youtubeOption, setYoutubeOption] = useState({});
    const videoRef = useRef();
    /**
     * window Resize Hooks
     */
    const windowSizeObject = useWindowResize();
    useEffect(() => {
        // let height = 270;
        // let width = 480;
        // // sm
        // if (windowSizeObject.width < 640) {

        // } // md
        // else if (640 <= windowSizeObject.width && windowSizeObject.width < 768) {
        //     height = 300;
        //     width = 600;

        // } // lg
        // else if (768 <= windowSizeObject.width && windowSizeObject.width < 1024) {
        //     height = 300;
        //     width = 800;

        // } // xl
        // else if (1024 <= windowSizeObject.width && windowSizeObject.width < 1280) {
        //     height = 350;
        //     width = 450;

        // } // 2xl
        // else if (1280 <= windowSizeObject.width && windowSizeObject.width < 1536) {
        //     height = 400;
        //     width = 600;

        // } // 4xl
        // else if (1536 <= windowSizeObject.width) {
        //     height = 500;
        //     width = 800;
        // }
        // console.log("windowSizeObject.width :: " + windowSizeObject.width)
        // console.log(width)
        // setWindowWidth(width);
        // setWindowHeight(height);
        setWindowHeight(videoRef.width * 0.5625);

    }, [windowSizeObject])
    useEffect(() => {
        setYoutubeOption({
            height: windowHeight,
            playerVars: {
            }
        });

    }, [windowWidth]);



    return (
        <IntroWrpper ref={ref}>
            {/* <IntroTop>
                <h1>Ofiicial Music Video</h1>
                <div>

                </div>
            </IntroTop> */}
            <div className="h-screen">
                <IntroCard>
                    <IntroInner>
                        <IntroInnerHeader>E.Que - I, still</IntroInnerHeader>
                        <IntroInnerMiddleText>E.Que's 1st Digital Single "I, still"
                            I still, screaming..
                        </IntroInnerMiddleText>
                        <IntroInnerText>
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

                        </IntroInnerText>
                    </IntroInner>
                    <IntroCardMovie>
                        <ReactPlayer url='https://www.youtube.com/watch?v=qRPuQuVAoeA'
                            width={'100%'} height={'100%'} />
                    </IntroCardMovie>
                </IntroCard>
                <IntroCard>
                    <IntroInner>
                        <IntroInnerHeader>A.O - Dive To You</IntroInnerHeader>
                        <IntroInnerMiddleText>A.O's 1st Digital Single "Dive To You"
                            DIVE TO YOU!</IntroInnerMiddleText>
                        <IntroInnerText>
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

                        </IntroInnerText>
                    </IntroInner>
                    <IntroCardMovie>
                        <ReactPlayer url='https://www.youtube.com/watch?v=90F6qTII73M'
                            width={'100%'} height={'100%'} />
                    </IntroCardMovie>
                </IntroCard>
            </div>
        </IntroWrpper >
    )
})
export default SectionIntro;
