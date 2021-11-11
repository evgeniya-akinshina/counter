import { Props } from "../Checkbox/types";
import './Checkbox.module.sass';

export const Checkbox =  ({ value, checked }: Props) => {
    return (
        <div>
            <label>Checkbox:</label> 
            <input type="checkbox" onClick={checked}></input>
            <p>Click {value} times</p>
        </div>
    )
};