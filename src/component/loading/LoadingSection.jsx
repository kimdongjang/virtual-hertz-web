import React, { forwardRef } from "react";
import './loadingSection.css'

const LoadingSection = () => {
    return (
        <div className="loading-section">
            <div className="loading-section__cover">
                <div className="loading-section__bg">
                    <div className="loading-section__bg-left"/>
                    <div className="loading-section__bg-right"/>
                </div>
                <div className="loading-section__inner">
                    <p>로딩중</p>
                </div>
            </div>
        </div>
    )
}

export default LoadingSection