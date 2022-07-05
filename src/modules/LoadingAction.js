import { useDebugValue } from "react";

export const LOADING_ON = "LOADING_ON";
export const LOADING_CLOSE = "LOADING_OFF";
export function loadingOn() {
    return {
        type: LOADING_ON,
        isLoading: true,
    }
}

export function loadingClose() {
    return {
        type: LOADING_CLOSE,
        isLoading: false,
    }
}

const initialState = {
    isLoading: true,
};

export const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_CLOSE:
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