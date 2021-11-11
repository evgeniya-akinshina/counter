import { Props } from "../Switch/types";
import styles from './Switch.module.sass';

export const Switch = ({ value, changed }: Props) => {
	return (
		<div>
            <label className={styles.switch}>
                <input type="checkbox" onClick={changed}></input>
                <span className={styles.slider}></span>
                <p>Changed {value} times</p>
            </label>
		</div>
	)
};