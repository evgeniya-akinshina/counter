import classNames from 'classnames'
import { Todo as TodoType } from '../../store/reducers/todoList/types'
import styles from './Todo.module.sass'

type Props = {
	todo: TodoType
	onClick: (state: boolean) => void
	onClickDeleteButton: () => void
}

export const Todo = ({ todo, onClickDeleteButton, onClick }: Props) => {
	return (
		<>
			<div className={classNames(styles.todo, { [styles.complited]: todo.completed })}>
				{todo.id + '. '}
				{todo.title}
			</div>
			<input type='checkbox' onChange={() => onClick(todo.completed)} />
			<button onClick={onClickDeleteButton} children='Clear todo' />
		</>
	)
}
