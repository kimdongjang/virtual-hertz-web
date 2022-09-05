import React, { forwardRef } from "react";
import './sectionIntro.css'
import YouTube from 'react-youtube';

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
        <div className="intro-section" ref={ref}>
            <div className="intro-section__bg">
                <div className="intro-section__card">
                    <div className="intro-section__inner">
                        <h2 className="">Virtual Hertz</h2>
                        <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="intro-section__img">
                        <YouTube videoId="qRPuQuVAoeA" opts={equeYoutubeOpt} />
                        {/* <img src="./images/test2.jpg" /> */}
                    </div>
                </div>
                <div className="intro-section__card">
                    <div className="intro-section__inner">
                        <h2 className="">Virtual Hertz</h2>
                        <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="intro-section__img">
                        <YouTube videoId="90F6qTII73M" opts={aoYoutubeOpt} />
                        {/* <img src="./images/test2.jpg" /> */}
                    </div>
                </div>

            </div>
        </div>
    )
})
export default SectionIntro;
