import React from "react";

export default function Polygon({ height, width }) {
    // x , y
    const point = (width / 1.1) + "," + (height / 4) + " " +
        (width / 1.5) + "," + (height / 3) + " " +
        (width / 1.12) + "," + (height / 2);
    console.log(point)
    return <polygon points={point} />;
}
