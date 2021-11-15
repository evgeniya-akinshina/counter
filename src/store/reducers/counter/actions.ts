import * as Types from './types'

const increment = (index: number): Types.Increment => ({
	type: Types.CounterTypes.INCREMENT,
	payload: index,
})

const decrement = (index: number): Types.Decrement => ({
	type: Types.CounterTypes.DECREMENT,
	payload: index,
})

const onChangeCheckbox = (): Types.OnChangeCheckbox => ({
	type: Types.CounterTypes.CHECKBOX,
})

export const actions = {
	increment,
	decrement,
	onChangeCheckbox,
}
