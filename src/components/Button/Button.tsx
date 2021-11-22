import classNames from 'classnames'
import { MouseEventHandler, PropsWithChildren } from 'react'
import styles from './Button.module.sass'

type Props = PropsWithChildren<{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean
    text?: string
    className?: string
    variant?: "primary" | "outline"
}>

export const Button = (props: Props) => {
    const { className, text, children, variant='primary', ...buttonProps } = props
    return (
        <button className={classNames(styles.btn, { styles[variant]: true })} {...buttonProps} children={children || text} />
    )
}