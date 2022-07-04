import { combineReducers } from "redux";
import { isLoadingReducer } from "./LoadingAction";

const rootReducer = combineReducers({
    isLoadingReducer
})

export default rootReducer;