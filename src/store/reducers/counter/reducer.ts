import { CounterState as State, CounterTypes, CheckboxTypes, SwitchTypes } from './types'

const initialState: State = {
	value1: 0,
	value2: 0,
    value3: 0,
    value4: 0,
}

export const counterReducer = (state: State = initialState, action: any) => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
			return { ...state, value1: state.value1 + 1 }

		case CounterTypes.DECREMENT:
			return { ...state, value1: state.value1 - 1 }

		case CounterTypes.INCREMENT1:
			return { ...state, value2: state.value2 + 1 }

		case CounterTypes.DECREMENT1:
			return { ...state, value2: state.value2 - 1 }

        case CheckboxTypes.CHECKED:
            return { ...state, value3: state.value3 + 1}

        case SwitchTypes.CHANGED:
            return { ...state, value4: state.value4 + 1}

		default:
			return state
	}
}
