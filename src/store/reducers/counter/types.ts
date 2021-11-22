export type CounterState = {
	values: number[]
	checkboxValue: boolean
	switchValue: boolean
}

export enum CounterTypes {
	INCREMENT = 'counter|increment',
	DECREMENT = 'counter|decrement',
    ADD_COUNTER = 'counter|addCounter',
	REMOVE_COUNTER = 'counter|removeCounter',
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

export type AddCounter = {
	type: CounterTypes.ADD_COUNTER
}

export type RemoveCounter = {
	type: CounterTypes.REMOVE_COUNTER
}

export type OnChangeCheckbox = {
	type: CounterTypes.CHECKBOX
}

export type OnChangeSwitch = {
	type: CounterTypes.SWITCH
}

export type CounterActions = Increment | Decrement | OnChangeCheckbox | OnChangeSwitch | AddCounter | RemoveCounter 
