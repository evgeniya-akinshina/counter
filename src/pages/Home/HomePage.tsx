import { Props } from './types'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React, { useCallback } from 'react'
import { counterActions, CounterTypes } from '../../store/reducers/counter'
import { Counter } from '../../components/Counters'
import { Checkbox } from '../../components/Checkbox'
import { Switch } from '../../components/Switch'

export const HomePage = (props: Props) => {
	const dispatch = useDispatch()

	const { checkboxValue, switchValue } = useTypedSelector(state => state.counter)

	const changeCheckbox = useCallback(() => {
		dispatch({ type: CounterTypes.CHECKBOX })
	}, [dispatch])

	const changeSwitch = useCallback(() => {
		dispatch({ type: CounterTypes.SWITCH })
	}, [dispatch])

	return (
		<React.Fragment>
			{/*<Counter value={props.values[0]} increment={() => props.increment(0)} decrement={() => props.decrement(0)} />*/}
			{/*<Counter value={props.values[1]} increment={() => props.increment(1)} decrement={() => props.decrement(1)} />*/}
			<Checkbox value={checkboxValue} onChange={state => changeCheckbox()} />
			{/*<Switch value={switchValue} changeSwitch={changeSwitch} />*/}
		</React.Fragment>
	)
}
