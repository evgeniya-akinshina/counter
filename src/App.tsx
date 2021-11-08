import {useDispatch, useSelector} from "react-redux";
import {CounterTypes} from "./reducers/types";
import "./index.sass";
import { RootState } from "./reducers";

function App() {
    const dispatch = useDispatch();
    const value = useSelector((state:RootState) => state.counter);

    return(
        <>
            <h2> Counter: {value}</h2>
            <button className="btn_click" onClick={() => dispatch({type: CounterTypes.ACTION_TYPE_INCREMENT})}>+</button>
            <button className="btn_click" onClick={() => dispatch({type: CounterTypes.ACTION_TYPE_DECREMENT})}>-</button>
        </>
    )
}

export default App;

