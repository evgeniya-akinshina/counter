import { Props } from './types'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React, { useCallback } from 'react'
import { CounterTypes } from '../../store/reducers/counter'
import { Counter } from '../../components/Counters'
import { Checkbox } from '../../components/Checkbox'
import { Switch } from '../../components/Switch'
import { Button } from '../../components/Button'

export const HomePage = (props: Props) => {
    const dispatch = useDispatch()

    const { checkboxValue, switchValue } = useTypedSelector(state => state.counter)

    const increment = useCallback(() => {
        dispatch({ type: CounterTypes.ADD_COUNTER })
    }, [dispatch])

    const decrement = useCallback(() => {
        dispatch({ type: CounterTypes.REMOVE_COUNTER })
    }, [dispatch])

    const changeCheckbox = useCallback(() => {
        dispatch({ type: CounterTypes.CHECKBOX })
    }, [dispatch])

    const changeSwitch = useCallback(() => {
        dispatch({ type: CounterTypes.SWITCH })
    }, [dispatch])

    return (
        <React.Fragment>
            <Button children={'Button'}  variant="outline" />
            <Counter value={props.values.length} increment={increment} decrement={decrement} />
            {props.values.map((item, index) =>
                <Counter value={item} key={index} increment={() => props.increment(index)} decrement={() => props.decrement(index)} />)}
            <Checkbox value={checkboxValue} disabled={!switchValue} onChange={() => changeCheckbox()} />
            <Switch value={switchValue} onChange={() => changeSwitch()} />
        </React.Fragment>
    )
}
