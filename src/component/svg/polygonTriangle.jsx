
import React from "react";

export default function PolygonTriangle({ point, style, distance }) {
    return <polygon points={point} style={style} >
        {/* <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from={from}
            to={distance}
            dur="10s"
            // begin="0s; transformP1_2.end"
            repeatCount="indefinite"
            id="transformP1_1" /> */}

        {/* <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate" from={from} to={distance}
            dur="5s"
            // begin="0s; transformP1_2.end"
            repeatCount="indefinite"
            id="transformP1_1" /> */}
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate" from="0 0" to={distance}
            dur="5s"
            begin="0s; transformP1_2.end"
            id="transformP1_1" />
        <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate" from={distance} to="0 0"
            dur="5s"
            begin="transformP1_1.end"
            id="transformP1_2" />
    </polygon>;
}
