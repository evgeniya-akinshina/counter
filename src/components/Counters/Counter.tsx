import { Props } from './types'
import styles from './Counter.module.sass'

export const Counter = ({ value, increment, decrement }: Props) => {
	return (
		<div>
			<h2> Counter: {value}</h2>
			<button className={styles.button} onClick={() => increment(++value)} children='+' />
			<button className={styles.button} onClick={() => decrement(--value)} children='-' />
		</div>
	)
}
