import { Props } from './types'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React, { useMemo } from 'react'
import { Counter } from '../../components/Counters'
import { Checkbox } from '../../components/Checkbox'
import { Switch } from '../../components/Switch'
import { Button } from '../../components/Button'
import axios from 'axios'
import { Todo } from '../../components/Todo'
import { LoaderButton } from 'src/components/LoaderButton'
import { useActions } from '../../hooks/useActions'
import { Todo as TodoType } from 'src/store/reducers/todos'

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
    
    const filteredTodos = () => {

        const todoCompleted: TodoType[] = []
        const todoNotCompleted: typeof props.data = []

        props.data.forEach(todo => (todo.completed ? todoCompleted : todoNotCompleted).push(todo))

        return {
            todoCompleted,
            todoNotCompleted,
        }
    }

    const {todoCompleted, todoNotCompleted} = filteredTodos()

    return (
        <React.Fragment>
            <LoaderButton isLoading={props.loading} onClick={requestAxios} />

            <div style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1 }}>
                    {todoNotCompleted.map(item => (
                        <Todo
                            todo={item}
                            key={item.id}
                            onClick={() => todosActions.completeTodo(item.id)}
                            onClickDeleteButton={() => todosActions.removeTodo(item.id)}
                            onClickSaveButton={(title) => {
                                todosActions.editTodo({
                                    id: item.id,
                                    title,
                                })
                            }}
                        />
                    ))}
                </div>
                <div style={{ flex: 1 }}>
                    {todoCompleted.map(item => (
                        <Todo
                            todo={item}
                            key={item.id}
                            onClick={() => todosActions.completeTodo(item.id)}
                            onClickDeleteButton={() => todosActions.removeTodo(item.id)}
                            onClickSaveButton={(title) => {
                                todosActions.editTodo({
                                    id: item.id,
                                    title,
                                })
                            }}
                        />
                    ))}
                </div>
            </div>

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