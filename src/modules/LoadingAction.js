import { useDebugValue } from "react";

export const LOADING_ON = "LOADING_ON";
export const LOADING_OFF = "LOADING_OFF";
export function loadingOn() {
    return {
        type: LOADING_ON,
        isLoading: true,
    }
}

export function loadingOff() {
    return {
        type: LOADING_OFF,
        isLoading: false,
    }
}

const initialState = {
    isLoading: true,
};

export const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_OFF:
            return {
                ...state,
                isLoading: false,
            }
        case LOADING_ON:
            return {
                ...state,
                isLoading: true,
            }
        default:
            return state;
    }
}