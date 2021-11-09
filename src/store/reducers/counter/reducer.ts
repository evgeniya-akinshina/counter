import {CounterState as State, CounterTypes} from "./types";

const initialState: State = {
    value: 0
}

export const counterReducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case CounterTypes.INCREMENT:
            return {value: state.value + 1}

        case CounterTypes.DECREMENT:
            return {value: state.value - 1}

        default:
            return state
    }
};