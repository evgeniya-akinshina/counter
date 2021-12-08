import { Todo } from '.'
import * as Types from './types'

const getTodosStart = (): Types.TodoStart => ({
	type: Types.TodosTypes.FETCH_TODOS__START,
})

const getTodosSuccess = (payload: Types.TodoSuccess['payload']): Types.TodoSuccess => ({
	type: Types.TodosTypes.FETCH_TODOS__SUCCESS,
	payload,
})

const getTodosFailure = (): Types.TodoFailue => ({
	type: Types.TodosTypes.FETCH_TODOS__FAILURE,
})

const removeTodo = (payload: Types.RemoveTodo['payload']): Types.RemoveTodo => ({
	type: Types.TodosTypes.REMOVE_TODO,
	payload,
})

const compliteTodo = (payload: Types.CompliteTodo['payload']): Types.CompliteTodo => ({
	type: Types.TodosTypes.COMPLITE_TODO,
	payload,
})

export const actions = {
	getTodosStart,
	getTodosSuccess,
	getTodosFailure,
	removeTodo,
	compliteTodo,
}
