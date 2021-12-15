import classNames from 'classnames'
import { useState } from 'react'
import { Todo as TodoType } from '../../store/reducers/todos/types'
import styles from './Todo.module.sass'

type Props = {
	todo: TodoType
	onClick: (state: boolean) => void
	onClickDeleteButton: () => void
    onClickSaveButton: (title: string) => void
}

export const Todo = ({ todo, onClickDeleteButton, onClick, onClickSaveButton }: Props) => {

    const [isEditing, setIsEditing] = useState(false)

    const [title, setTitle] = useState(todo.title)

    const onEdit = () => {
        setIsEditing(true)
    }

    const onSave = () => {
        setIsEditing(false)
        if(title !== todo.title) {
            onClickSaveButton(title)
        }
    }

    const onCancelEditing = () => {
        setIsEditing(false)
        setTitle(todo.title)
    }

	return (
		<>
			<div className={classNames(styles.todo, { [styles.completed] : todo.completed })}>
				{todo.id + '. '}
                {isEditing ? <input value={title} onChange={event => setTitle(event.target.value)} /> : <span>{todo.title} </span>}<br/>
            <input type='checkbox' onChange={() => onClick(todo.completed)} />
			<button onClick={isEditing ? onCancelEditing : onClickDeleteButton}>{isEditing ? 'Go Back' : 'Crear Todo' }</button>
            <button onClick={isEditing ? onSave : onEdit} style={{marginLeft:'5px'}}>{isEditing ? 'Save' : 'Edit todo' }</button>
            </div>
		</>
	)
}
