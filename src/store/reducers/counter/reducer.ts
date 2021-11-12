import { CounterState as State, CounterTypes } from './types'

const initialState: State = {
	values: [0, 0],
	checkboxValue: false,
	switchValue: false,
}

interface Action {
	type: any
	payload?: number
}

export const counterReducer = (state: State = initialState, action: Action) => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
			const obj1 = Object.assign(state, state.values[0] + 1)
			return {
				obj1,
			}

		case CounterTypes.DECREMENT:
			const obj2 = Object.assign(state)
			return {
				obj2,
			}

		case CounterTypes.CHECKBOX:
			return { ...state, checkboxValue: !state.checkboxValue }

		case CounterTypes.SWITCH:
			return { ...state, switchValue: !state.switchValue }

		default:
			return state
	}
}
