import React, { useCallback } from 'react';
import { Counter } from './components/Counters';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { CounterTypes } from './store/reducers/counter/types';

export function App() {
	const dispatch = useDispatch()

	const count1 = useTypedSelector(state => state.counter.value1)

    const count2 = useTypedSelector(state => state.counter.value2)

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

	return (
		<React.Fragment>
			<Counter value={count1} increment={increment} decrement={decrement} />
			<Counter value={count2} increment={increment1} decrement={decrement1} />
		</React.Fragment>
	)
};