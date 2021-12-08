import { connect } from 'react-redux'
import { HomePage as Component } from './HomePage'
import { RootState } from '../../store/types'
import { counterActions } from '../../store/reducers/counter'
import { todoListActions } from '../../store/reducers/todoList'

export const mapStateToProps = (state: RootState) => ({
	values: state.counter.values,
	loading: state.todos.loading,
	data: state.todos.data,
	error: state.todos.error,
})

export const mapActionsToProps = {
	increment: counterActions.increment,
	decrement: counterActions.increment,
	getTodosStart: todoListActions.getTodosStart,
	getTodosSuccess: todoListActions.getTodosSuccess,
	getTodosFailure: todoListActions.getTodosFailure,
	complitedTodo: todoListActions.compliteTodo,
	removeTodo: todoListActions.removeTodo,
}

export const HomePage = connect(mapStateToProps, mapActionsToProps)(Component)
