import {useDispatch, useSelector} from "react-redux";
import {CounterTypes} from "./store/reducers/counter/types";
import "./index.sass";
import {RootState} from "./store";
import {useCallback} from "react";

export function App() {
    const dispatch = useDispatch();

    const counterValue = useSelector((state: RootState) => state.counter.value);

    const increment = useCallback(() => {
        console.log('increment')
        dispatch({type: CounterTypes.INCREMENT})
    }, [dispatch])

    const decrement = useCallback(() => {
        console.log('decrement')
        dispatch({type: CounterTypes.DECREMENT})
    }, [dispatch])

    return (
        <>
            <h2> Counter: {counterValue}</h2>
            <button className="btn_click" onClick={increment} children='+'/>
            <button className="btn_click" onClick={decrement} children='-'/>
        </>
    )
}
