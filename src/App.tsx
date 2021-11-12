import React, { useCallback } from 'react'
import { Counter } from './components/Counters'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './hooks/useTypedSelector'
import { CounterTypes } from './store/reducers/counter/types'
import { Checkbox } from './components/Checkbox'
import { Switch } from './components/Switch'

export function App() {
	const dispatch = useDispatch()

	const { values, checkboxValue, switchValue } = useTypedSelector(state => state.counter)

	const increment = useCallback(
		(index: number) => {
			dispatch({ type: CounterTypes.INCREMENT, payload: { index } })
		},
		[dispatch],
	)

	const decrement = useCallback(
		(index: number) => {
			dispatch({ type: CounterTypes.DECREMENT, payload: { index } })
		},
		[dispatch],
	)

	const changeCheckbox = useCallback(() => {
		dispatch({ type: CounterTypes.CHECKBOX })
	}, [dispatch])

	const changeSwitch = useCallback(() => {
		dispatch({ type: CounterTypes.SWITCH })
	}, [dispatch])

	return (
		<React.Fragment>
			<Counter value={values[0]} increment={increment} decrement={decrement} />
			<Counter value={values[0]} increment={increment} decrement={decrement} />
			<Checkbox value={checkboxValue} changeCheckbox={changeCheckbox} />
			<Switch value={switchValue} changeSwitch={changeSwitch} />
		</React.Fragment>
	)
}
