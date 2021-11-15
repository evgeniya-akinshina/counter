import { rootReducer } from './reducers'
import { CounterActions } from './reducers/counter'
import { AnyFunction } from '../types/common'

export type RootState = ReturnType<typeof rootReducer>
export type RootActions = CounterActions

type ReturnTypeOrObject<MapToProps> = MapToProps extends null | undefined
	? {}
	: MapToProps extends AnyFunction
	? ReturnType<MapToProps>
	: MapToProps

export type ConnectProps<MapState = null, MapDispatch = null> = ReturnTypeOrObject<MapState> &
	ReturnTypeOrObject<MapDispatch>
