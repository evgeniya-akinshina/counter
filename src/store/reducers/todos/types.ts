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
    COMPLETE_TODO = 'todos|completeTodo',
    EDIT_TODO = 'todos|editTodo',
    SAVE_TODO = 'todos|saveTodo',
}

export type TodoStart = {
	type: TodosTypes.FETCH_TODOS__START
}

export type TodoSuccess = {
	type: TodosTypes.FETCH_TODOS__SUCCESS
	payload: Todo[]
}

export type TodoFailure = {
	type: TodosTypes.FETCH_TODOS__FAILURE
}

export type RemoveTodo = {
	type: TodosTypes.REMOVE_TODO
	payload: Todo['id']
}

export type CompleteTodo = {
	type: TodosTypes.COMPLETE_TODO
	payload: Todo['id']
}

export type EditTodo = {
	type: TodosTypes.EDIT_TODO
	payload: {id:  Todo['id'], title: Todo['title']}
}

export type TodosActions = TodoStart | TodoSuccess | TodoFailure | RemoveTodo | CompleteTodo | EditTodo
