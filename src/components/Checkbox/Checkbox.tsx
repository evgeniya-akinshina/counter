import { Props } from './types'
import styles from './Checkbox.module.sass'

export const Checkbox = ({ value, onChange, disabled }: Props) => {
	return (
		<label className={styles.checkbox_label}>
			Checkbox:
			<input className={styles.input} type='checkbox' checked={value} disabled={disabled} onChange={disabled ? undefined : () => onChange(value)} />
			<p> Status: {JSON.stringify(value)}</p>
		</label>
	)
}
