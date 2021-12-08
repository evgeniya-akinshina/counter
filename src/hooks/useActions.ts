import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { counterActions } from '../store/reducers/counter'
import { todosActions } from '../store/reducers/todos'

export const useActions = () => {
	const dispatch = useDispatch()
	return {
		counterActions: bindActionCreators(counterActions, dispatch),
		todosActions: bindActionCreators(todosActions, dispatch),
	}
}
