import { CounterState as State, CounterTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
	values: [0, 0, 0],
	checkboxValue: false,
	switchValue: false,
}

export const counterReducer = (state: State = initialState, action: RootActions): State => {
	switch (action.type) {
		case CounterTypes.INCREMENT:
			return {
				...state,
				values: Object.assign([], state.values, { [action.payload]: state.values[action.payload] + 1 }),
			}

		case CounterTypes.DECREMENT:
			return {
				...state,
				values: Object.assign([], state.values, { [action.payload]: state.values[action.payload] - 1 }),
			}

		case CounterTypes.ADD_COUNTER:
			return {
				...state,
				values: [...state.values, 0],
			}

		case CounterTypes.REMOVE_COUNTER:
			const values = [...state.values]
			values.pop()
			return {
				...state,
				values,
			}

		case CounterTypes.CHECKBOX:
			return { ...state, checkboxValue: !state.checkboxValue }

		case CounterTypes.SWITCH:
			return { ...state, switchValue: !state.switchValue }

		default:
			return state
	}
}
