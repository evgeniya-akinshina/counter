export type Props = {
	value: number
	increment: (value: number) => void
	decrement: (value: number) => void
	step?: number
}
