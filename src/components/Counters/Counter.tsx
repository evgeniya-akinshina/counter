import { Props } from './types'
import styles from './Counter.module.sass'

export const Counter = ({ value, increment, decrement }: Props) => {
    const disabledButton = value <=0

	return (
		<div className={styles.div_button}>
			<button className={styles.button} onClick={disabledButton ? undefined : () => decrement(--value)} disabled={disabledButton} children='-' />
            {value}
			<button className={styles.button} onClick={() => increment(++value)} children='+' />
		</div>
	)
}