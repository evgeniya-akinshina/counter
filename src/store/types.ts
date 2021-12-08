import { rootReducer } from './reducers'
import { CounterActions } from './reducers/counter'
import { TodosActions } from './reducers/todos'

export type RootState = ReturnType<typeof rootReducer>
export type RootActions = CounterActions | TodosActions
