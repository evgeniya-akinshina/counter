import { Props } from './types'
import styles from './Switch.module.sass'

export const Switch = ({ value, onChange }: Props) => {
	return (
		<label className={styles.switch}>
			<input type='checkbox' onChange={() => onChange(value)} />
			<span className={styles.slider} />
			<p className={styles.p_style}> Status: {JSON.stringify(value)}</p>
		</label>
	)
}
