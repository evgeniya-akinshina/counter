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
