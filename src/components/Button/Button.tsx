import classNames from 'classnames'
import styles from './Button.module.sass'

export type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	variant?:
		| 'primary'
		| 'outlinePrimary'
		| 'primary-underline'
		| 'secondary'
		| 'outline-secondary'
		| 'success'
		| 'outline-success'
		| 'danger'
		| 'outline-danger'
		| 'warning'
		| 'outline-warning'
		| 'info'
		| 'outline-info'
		| 'white'
		| 'outline-white'
		| 'dark'
		| 'outline-dark'
}

export const Button = (props: Props) => {
	const { className, variant = 'primary', ...buttonProps } = props
	const variantToCamelCase = variant.replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase()
	})
	return <button className={classNames(styles.btn, { [styles[variantToCamelCase]]: true })} {...buttonProps} />
}
