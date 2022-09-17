import { useEffect, useState } from "react"


const useWindowResize = () => {
    const [currentWidth, setCurrentWidth] = useState();
    const [currentHeight, setCurrentHeight] = useState();

    const handleResize = () => {
        setCurrentWidth(window.innerWidth)
        setCurrentHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return {
        width: currentWidth,
        height: currentHeight,
    }
}

export default useWindowResize;