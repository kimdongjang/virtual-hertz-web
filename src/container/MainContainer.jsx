
import React, { useEffect, useState } from "react";
import SectionCharacter from "../component/SectionCharacter";
import SectionHome from "../component/SectionHome";
import SectionIntro from "../component/SectionIntro";
import './mainContainer.css'

export default function MainContainer() {

    return (
        <div className="main-container">
            <SectionHome />
            <SectionIntro />
            <SectionCharacter />
        </div>
    )
}
