import { TodosState as State, TodosTypes } from './types'
import { RootActions } from '../../types'

const initialState: State = {
    data: [],
    loading: false,
    error: false,
}

export const todosReducer = (state: State = initialState, action: RootActions): State => {
    switch (action.type) {
        case TodosTypes.FETCH_TODOS__START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case TodosTypes.FETCH_TODOS__SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case TodosTypes.FETCH_TODOS__FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case TodosTypes.REMOVE_TODO: {
            const index = state.data.findIndex(item => item.id === action.payload)
            state.data.splice(index, 1)

            return {
                ...state,
                data: [...state.data],
            }
        }
        case TodosTypes.COMPLETE_TODO:
            const index = state.data.findIndex(item => item.id === action.payload)             

            if (index === -1) return state

            state.data[index].completed = !state.data[index].completed 

            return {
                ...state,
                data: [...state.data],
            }
        case TodosTypes.EDIT_TODO: {

            const index = state.data.findIndex(item => item.id === action.payload.id)

            if (index === -1) return state

            state.data[index].title = action.payload.title
            
            return {
                ...state,
                data: [...state.data],
            }
        }
        default:
            return state
    }
}