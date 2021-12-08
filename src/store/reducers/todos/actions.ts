import * as Types from './types'

const getTodosStart = (): Types.TodoStart => ({
	type: Types.TodosTypes.FETCH_TODOS__START,
})

const getTodosSuccess = (payload: Types.TodoSuccess['payload']): Types.TodoSuccess => ({
	type: Types.TodosTypes.FETCH_TODOS__SUCCESS,
	payload,
})

const getTodosFailure = (): Types.TodoFailure => ({
	type: Types.TodosTypes.FETCH_TODOS__FAILURE,
})

const removeTodo = (payload: Types.RemoveTodo['payload']): Types.RemoveTodo => ({
	type: Types.TodosTypes.REMOVE_TODO,
	payload,
})

const completeTodo = (payload: Types.CompleteTodo['payload']): Types.CompleteTodo => ({
	type: Types.TodosTypes.COMPLETE_TODO,
	payload,
})

export const actions = {
	getTodosStart,
	getTodosSuccess,
	getTodosFailure,
	removeTodo,
	completeTodo,
}
