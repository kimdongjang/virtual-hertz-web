import React, { useEffect, useState } from "react";
import { loadingOff } from "../modules/LoadingAction";
import { useSelector, useDispatch } from 'react-redux';
import LoadingSection from "../component/loading/LoadingSection";

const LoadingContainer = (props) => {
    const isLoading = useSelector(state => (state.isLoadingReducer.isLoading))
    const [seconds, setSeconds] = useState(3);
    const dispatch = useDispatch();

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) >= 1) {
                setSeconds(parseInt(seconds) - 1);
            }
        }, 1000);
        return () => {
            if (seconds <= 1) {
                console.log("Clear : " + seconds)
                dispatch(loadingOff());
            }
            clearInterval(countdown);
        };
    }, [seconds]);
    return (
        <div>
            {isLoading ? <LoadingSection /> : null}
        </div>
    )
}

export default LoadingContainer;