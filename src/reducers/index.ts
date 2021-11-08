import {combineReducers} from "redux";
import {counterReducer} from "./reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
})

export type RootState = ReturnType<typeof rootReducer>