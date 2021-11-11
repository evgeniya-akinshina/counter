import React, { useCallback } from 'react';
import { Counter } from './components/Counters';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { CounterTypes, CheckboxTypes, SwitchTypes } from './store/reducers/counter/types';
import { Checkbox } from './components/Checkbox';
import { Switch } from './components/Switch';

export function App() {
	const dispatch = useDispatch()

	const count1 = useTypedSelector(state => state.counter.value1)

    const count2 = useTypedSelector(state => state.counter.value2)

    const count3 = useTypedSelector(state => state.counter.value3)

    const count4 = useTypedSelector(state => state.counter.value4)

	const increment = useCallback(() => {
		dispatch({ type: CounterTypes.INCREMENT })
	}, [dispatch])

	const decrement = useCallback(() => {
		dispatch({ type: CounterTypes.DECREMENT })
	}, [dispatch])

    const increment1 = useCallback(() => {
		dispatch({ type: CounterTypes.INCREMENT1 })
	}, [dispatch])

	const decrement1 = useCallback(() => {
		dispatch({ type: CounterTypes.DECREMENT1 })
	}, [dispatch])

    const changed = useCallback(() => {
		dispatch({ type: SwitchTypes.CHANGED })
	}, [dispatch])

    const checked = useCallback(() => {
		dispatch({ type: CheckboxTypes.CHECKED })
	}, [dispatch])

	return (
		<React.Fragment>
			<Counter value={count1} increment={increment} decrement={decrement} />
			<Counter value={count2} increment={increment1} decrement={decrement1} />
            <Checkbox value={count3} checked={checked} />
            <Switch value={count4} changed={changed} />
		</React.Fragment>
	)
};