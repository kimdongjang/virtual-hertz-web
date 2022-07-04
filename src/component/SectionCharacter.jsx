import React, { forwardRef } from "react";
import './sectionCharacter.css'

const SectionCharacter = forwardRef((prpos, ref) => {
    return (
        <div className="character-section" ref={ref}>
            <div className="character-section__bg">
                <div className="character-section__card">
                    <div className="character-section__img">
                        <img src="./images/image4.jpg" />
                    </div>
                    <div className="character-section__inner">
                        <div className="character-section__title">
                            <div className="character-section__title-deco" />
                            <h2 className="">Virtual Hertz</h2>
                        </div>
                        <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}
);

export default SectionCharacter;