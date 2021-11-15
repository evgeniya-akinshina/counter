export type CounterState = {
	values: number[]
	checkboxValue: boolean
	switchValue: boolean
}

export enum CounterTypes {
	INCREMENT = 'counter|increment',
	DECREMENT = 'counter|decrement',
	CHECKBOX = 'counter|checkboxValue',
	SWITCH = 'counter|switchValue',
}

export type Increment = {
	type: CounterTypes.INCREMENT
	payload: number
}

export type Decrement = {
	type: CounterTypes.DECREMENT
	payload: number
}

export type CounterActions = Increment | Decrement
