import { Loader } from '../Loader'
import { Button } from '../Button'
import { Props as ButtonProps } from '../Button'

type Props = ButtonProps & {
	isLoading?: boolean
	getTodos?: () => void
	getTodosSuccess?: () => void
	getTodosFailure?: () => void
}

export const LoaderButton = ({
	isLoading,
	disabled,
	getTodos,
	getTodosSuccess,
	getTodosFailure,
	...buttonProps
}: Props) => {
	return (
		<Button disabled={disabled || isLoading} {...buttonProps}>
			{isLoading ? <Loader /> : 'Click me'}
		</Button>
	)
}
