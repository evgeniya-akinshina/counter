import { CounterTypes } from "../reducers/counter/types";
import { Dispatch } from "redux";
import { Action } from "../actions";

const increment = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: CounterTypes.INCREMENT,
    });
  };
};

const decrement = () => {
  return {
    type: CounterTypes.DECREMENT,
  };
};
