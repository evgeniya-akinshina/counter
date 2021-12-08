import { connect } from 'react-redux'
import { HomePage as Component } from './HomePage'
import { RootState } from '../../store/types'
import { counterActions } from '../../store/reducers/counter'
import { todosActions } from '../../store/reducers/todos'

export const mapStateToProps = (state: RootState) => ({
	values: state.counter.values,
	loading: state.todos.loading,
	data: state.todos.data,
	error: state.todos.error,
})

export const mapActionsToProps = {
	increment: counterActions.increment,
	decrement: counterActions.increment,
	getTodosStart: todosActions.getTodosStart,
	getTodosSuccess: todosActions.getTodosSuccess,
	getTodosFailure: todosActions.getTodosFailure,
	completedTodo: todosActions.completeTodo,
	removeTodo: todosActions.removeTodo,
}

export const connector = connect(mapStateToProps, mapActionsToProps)
export const HomePage = connector(Component)
