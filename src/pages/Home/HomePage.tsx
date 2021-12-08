import { Props } from './types'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React from 'react'
import { Counter } from '../../components/Counters'
import { Checkbox } from '../../components/Checkbox'
import { Switch } from '../../components/Switch'
import { Button } from '../../components/Button'
import axios from 'axios'
import { Todo } from '../../components/Todo'
import { LoaderButton } from 'src/components/LoaderButton'
import { useActions } from '../../hooks/useActions'

export const HomePage = (props: Props) => {
	const { checkboxValue, switchValue } = useTypedSelector(state => state.counter)
	const { counterActions, todosActions } = useActions()

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
					onClick={() => todosActions.completeTodo(item.id)}
					onClickDeleteButton={() => todosActions.removeTodo(item.id)}
				/>
			))}

			<Button children={'Button'} variant='success' />

			<Counter
				value={props.values.length}
				increment={counterActions.increment}
				decrement={counterActions.decrement}
			/>

			{props.values.map((item, index) => (
				<Counter
					value={item}
					key={index}
					increment={() => counterActions.increment(index)}
					decrement={() => counterActions.decrement(index)}
				/>
			))}

			<Checkbox value={checkboxValue} disabled={!switchValue} onChange={() => counterActions.onChangeCheckbox()} />
			<Switch value={switchValue} onChange={() => counterActions.onChangeSwitch()} />
		</React.Fragment>
	)
}
