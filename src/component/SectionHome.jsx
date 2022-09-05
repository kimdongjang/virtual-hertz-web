import React, { forwardRef, useEffect } from "react";
import "./sectionHome.css"

const SectionHome = forwardRef((prpos, ref) => {
    return (
        <div className="main-section" ref={ref}>
            <div className="main-section__bg">
                <div className="main-section__bg-video">
                    <video src="./video/eque_pv.mp4" muted loop playsInline autoPlay />
                </div>
            </div>
            <div className="main-section__inner">
                <h2 className="">Virtual Hertz</h2>
                <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
})
export default SectionHome;