/* eslint-disable no-duplicate-case */
import { CounterState as State, CounterTypes } from './types';

const initialState: State = {
	value1: 0,
    value2: 0,
}

export const counterReducer = (state: State = initialState, action: any) => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
			return { ...state, value: state.value1 + 1 }

		case CounterTypes.DECREMENT:
			return { ...state, value: state.value1 - 1 }

        case CounterTypes.INCREMENT1:
            return { ...state, value: state.value2 + 1 }

        case CounterTypes.DECREMENT1:
            return { ...state, value: state.value2 - 1 }

		default:
			return state
	}
};
