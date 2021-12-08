import { Props } from './types'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React, { useCallback } from 'react'
import { CounterTypes } from '../../store/reducers/counter'
import { TodosTypes } from '../../store/reducers/todoList'
import { Counter } from '../../components/Counters'
import { Checkbox } from '../../components/Checkbox'
import { Switch } from '../../components/Switch'
import { Button } from '../../components/Button'
import { LoaderButton } from '../../components/LoaderButton/LoaderButton'
import axios from 'axios'
import { Todo } from '../../components/Todo'

export const HomePage = (props: Props) => {
	const dispatch = useDispatch()

	const { checkboxValue, switchValue } = useTypedSelector(state => state.counter)

	const increment = useCallback(() => {
		dispatch({ type: CounterTypes.ADD_COUNTER })
	}, [dispatch])

	const decrement = useCallback(() => {
		dispatch({ type: CounterTypes.REMOVE_COUNTER })
	}, [dispatch])

	const changeCheckbox = useCallback(() => {
		dispatch({ type: CounterTypes.CHECKBOX })
	}, [dispatch])

	const changeSwitch = useCallback(() => {
		dispatch({ type: CounterTypes.SWITCH })
	}, [dispatch])

	const requestAxios = async () => {
		try {
			props.getTodosStart()
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
			setTimeout(() => {
				props.getTodosSuccess(res.data)
			}, 2000)
		} catch {
			props.getTodosFailure()
		}
	}

	return (
		<React.Fragment>
			<LoaderButton isLoading={props.loading} onClick={requestAxios} />
			{props.data.map(item => (
				<Todo
					todo={item}
					key={item.id}
					onClick={() => props.complitedTodo(item.id)}
					onClickDeleteButton={() => props.removeTodo(item.id)}
				/>
			))}
			<Button children={'Button'} variant='success' />
			<Counter value={props.values.length} increment={increment} decrement={decrement} />
			{props.values.map((item, index) => (
				<Counter
					value={item}
					key={index}
					increment={() => props.increment(index)}
					decrement={() => props.decrement(index)}
				/>
			))}
			<Checkbox value={checkboxValue} disabled={!switchValue} onChange={() => changeCheckbox()} />
			<Switch value={switchValue} onChange={() => changeSwitch()} />
		</React.Fragment>
	)
}
