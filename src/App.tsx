import React from "react";
import {Counter} from "./components/Counters";

export function App() {

    return (
        <React.Fragment>
            <Counter value={0} increment={function(){
            } } decrement={function (){
            } } />
            <Counter value={0} increment={function() {
            } } decrement={function () {
            } } />
        </React.Fragment>
    )
};