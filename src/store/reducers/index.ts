import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import { todosReducer } from './todos'

export const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todosReducer,
})
