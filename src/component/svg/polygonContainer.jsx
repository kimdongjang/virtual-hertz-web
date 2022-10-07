import React from "react";
import './polygonContainer.css'
import PolygonTriangle from "./polygonTriangle";

export default function PolygonContainer({ height, width }) {
    // x , y
    const styleP1 = {
        fill: "#f43f5e",
        opacity: 0.5,
    }
    const pointP1 = (width / 1.1) + "," + (height / 4) + " " +
        (width / 1.5) + "," + (height / 3) + " " +
        (width / 1.12) + "," + (height / 2);

    const pointP2 = (width / 1.01) + "," + (height / 10) + " " +
        (width / 1.01) + "," + (height / 3) + " " +
        (width / 1.12) + "," + (height / 7);

    const pointP3 = (width / 1.12) + "," + (height / 7) + " " +
        (width / 1.15) + "," + (height / 3) + " " +
        (width / 1.3) + "," + (height / 5);
    const pointP4 = (width / 1.05) + "," + (height / 2.3) + " " +
        (width / 1.01) + "," + (height / 4) + " " +
        (width / 1.3) + "," + (height / 7);
    const pointP5 = (width / 1.05) + "," + (height / 2.5) + " " +
        (width / 1.01) + "," + (height / 1.2) + " " +
        (width / 1.3) + "," + (height / 1.8);
    const pointP6 = (width / 1.01) + "," + (height / 1.01) + " " +
        (width / 1.01) + "," + (height / 1.6) + " " +
        (width / 1.2) + "," + (height / 1.2);
    const pointP7 = (width / 1.01) + "," + (height / 1.3) + " " +
        (width / 1.03) + "," + (height / 1.05) + " " +
        (width / 1.4) + "," + (height / 1.2);
    return <svg>
        {/* <PolygonTriangle point={pointP1} style={styleP1} from={"0 600 300"} distance={"360 -150 -570"} />
        <PolygonTriangle point={pointP2} style={styleP1} from={"0 60 70"} distance={"360 60 70"} />
        <PolygonTriangle point={pointP3} style={styleP1} from={"0 60 70"} distance={"360 60 70"} />
        <PolygonTriangle point={pointP4} style={styleP1} from={"0 60 70"} distance={"360 60 70"} />
        <PolygonTriangle point={pointP5} style={styleP1} from={"0 60 70"} distance={"360 60 70"} />
        <PolygonTriangle point={pointP4} style={styleP1} from={"0 60 70"} distance={"360 60 70"} /> */}


        {/* <PolygonTriangle point={pointP1} style={styleP1} from={"600 300"} distance={"-150 -570"} />
        <PolygonTriangle point={pointP2} style={styleP1} from={"500 100"} distance={"-360 -210"} />
        <PolygonTriangle point={pointP3} style={styleP1} from={"300 700"} distance={"-100 -300"} />
        <PolygonTriangle point={pointP4} style={styleP1} from={"100 900"} distance={"-300 -300"} />
        <PolygonTriangle point={pointP5} style={styleP1} from={"100 800"} distance={"-600 -700"} />
        <PolygonTriangle point={pointP4} style={styleP1} from={"0 0"} distance={"-100 800"} /> */}


        <PolygonTriangle point={pointP1} style={styleP1} distance={"-150 -170"} />
        <PolygonTriangle point={pointP2} style={styleP1} distance={"360 -210"} />
        <PolygonTriangle point={pointP3} style={styleP1} distance={"-100 -100"} />
        <PolygonTriangle point={pointP4} style={styleP1} distance={"300 -90"} />

        <PolygonTriangle point={pointP5} style={styleP1} distance={"-150 -30"} />
        <PolygonTriangle point={pointP6} style={styleP1} distance={"-90 -200"} />
        <PolygonTriangle point={pointP7} style={styleP1} distance={"-100 -50"} />
    </svg>;
}
