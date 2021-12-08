import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { counterActions } from '../store/reducers/counter/index'
import { todoListActions } from '../store/reducers/todoList/index'

export const actionCreators = {
	...counterActions,
	...todoListActions,
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actionCreators, dispatch)
}
