import { Props } from './types'
import styles from './Checkbox.module.sass'

export const Checkbox = ({ value, onChange }: Props) => {
	return (
		<label className={styles.checkbox_label}>
			Checkbox:
			<input type='checkbox' onChange={() => onChange(value)} />
			<p> Status: {JSON.stringify(value)}</p>
		</label>
	)
}
