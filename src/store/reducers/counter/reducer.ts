import { CounterState as State, CounterTypes } from './types'

const initialState: State = {
	values: [0, 0],
	checkboxValue: false,
	switchValue: false,
}

export const counterReducer = (state: State = initialState, action: any) => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
            return Object.assign([], state.values, {index: state.values}, state.values[0] + 1)

		case CounterTypes.DECREMENT:
			return {}

		case CounterTypes.CHECKBOX:
			return { ...state, checkboxValue: !state.checkboxValue }

		case CounterTypes.SWITCH:
			return { ...state, switchValue: !state.switchValue }

		default:
			return state
	}
}
