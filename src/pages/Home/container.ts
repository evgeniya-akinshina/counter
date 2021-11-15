import { connect } from 'react-redux'
import { HomePage as Component } from './HomePage'
import { RootState } from '../../store/types'
import { counterActions } from '../../store/reducers/counter'

export const mapStateToProps = (state: RootState) => ({
	values: state.counter.values,
})

export const mapActionsToProps = {
	increment: counterActions.increment,
    decrement: counterActions.decrement,
}

export const HomePage = connect(mapStateToProps, mapActionsToProps)(Component)
