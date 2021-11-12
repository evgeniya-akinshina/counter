import { CounterState as State, CounterTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
	values: [0, 0],
	checkboxValue: false,
	switchValue: false,
}

export const counterReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
			action.payload
			const obj1 = Object.assign(state, state.values[0] + 1)
			return {
				...state,
			}

		case CounterTypes.DECREMENT:
			const obj2 = Object.assign(state)
			return {
				...state,
			}

		// case CounterTypes.CHECKBOX:
		// 	return { ...state, checkboxValue: !state.checkboxValue }
		//
		// case CounterTypes.SWITCH:
		// 	return { ...state, switchValue: !state.switchValue }

		default:
			return state
	}
}
