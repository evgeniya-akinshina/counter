import { Props } from './types'
import styles from './Checkbox.module.sass'

export const Checkbox = ({ value, changeCheckbox }: Props) => {
	return (
		<label className={styles.checkbox_label}>
			Checkbox:
			<input type='checkbox' onChange={changeCheckbox} />
			<p> Status: {JSON.stringify(value)}</p>
		</label>
	)
}
