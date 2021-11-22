import { createStore } from 'redux'
import { rootReducer } from './reducers'

// const configureStore = (): RootState => {
// Create saga middleware
// const sagaMiddleware = createSagaMiddleware()

// Gather all middlewares
// const allMiddlewares: any[] = [sagaMiddleware]

// Compose all middlewares
// const middleware: StoreEnhancer = applyMiddleware(...allMiddlewares)

// Create Redux store
// const store = createStore(rootReducer, middleware)

// Apply all Sagas
// sagaMiddleware.run(rootSaga)

// return store
// }

export const store = createStore(rootReducer)

// export const useTypedSelector = () => {}
