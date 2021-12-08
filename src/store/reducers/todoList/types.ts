export type TodosState = {
	data: Todo[]
	loading: boolean
	error: boolean
}

export type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export enum TodosTypes {
	FETCH_TODOS__START = 'todos|fetchTodosStart',
	FETCH_TODOS__SUCCESS = 'todos|fetchTodosSuccess',
	FETCH_TODOS__FAILURE = 'todos|fetchTodosFailure',
	REMOVE_TODO = 'todos|removeTodo',
	COMPLITE_TODO = 'todos|compliteTodo',
}

export type TodoStart = {
	type: TodosTypes.FETCH_TODOS__START
}

export type TodoSuccess = {
	type: TodosTypes.FETCH_TODOS__SUCCESS
	payload: Todo[]
}

export type TodoFailue = {
	type: TodosTypes.FETCH_TODOS__FAILURE
}

export type RemoveTodo = {
	type: TodosTypes.REMOVE_TODO
	payload: Todo['id']
}

export type CompliteTodo = {
	type: TodosTypes.COMPLITE_TODO
	payload: Todo['id']
}

export type TodosActions = TodoStart | TodoSuccess | TodoFailue | RemoveTodo | CompliteTodo
