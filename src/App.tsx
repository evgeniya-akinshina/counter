import React, { useCallback } from 'react'
import { Counter } from './components/Counters'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { CounterTypes } from './store/reducers/counter/types'

export function App() {
	const dispatch = useDispatch()
	const { value } = useSelector((state: RootState) => state.counter)

	const i = useCallback(() => {
		dispatch({ type: CounterTypes.INCREMENT })
	}, [dispatch])

	const d = useCallback(() => {
		dispatch({ type: CounterTypes.DECREMENT })
	}, [dispatch])

	return (
		<React.Fragment>
			<Counter value={value} increment={i} decrement={d} />
			{/*<Counter value={value} increment={i} decrement={d} />*/}
		</React.Fragment>
	)
}
