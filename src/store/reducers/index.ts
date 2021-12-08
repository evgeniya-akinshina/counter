import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import { todoListReducer } from './todoList'

export const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todoListReducer,
})
