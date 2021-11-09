import React from "react";
import {Props} from "./types";
import "../../index.sass";

export const Counter = ({value, increment, decrement} : Props) => {

    return <div>
            <h2> Counter: {value}</h2>
            <button className="btn_click" onClick={increment} children='+'/>
            <button className="btn_click" onClick={decrement} children='-'/>
        </div>
};