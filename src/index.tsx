import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import {createStore} from "redux";
import { counterReducer } from "./reducers/reducer";

const store = createStore(counterReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);