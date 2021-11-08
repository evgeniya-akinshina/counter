import { CounterState as State, CounterTypes } from "./types";

const initialState = {
    value: 0
}

export const counterReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case CounterTypes.ACTION_TYPE_INCREMENT:
            return {value: state.value + 1}
    
        case CounterTypes.ACTION_TYPE_DECREMENT:
            return {value: state.value -1}
            
        default:
            return state
    }
};