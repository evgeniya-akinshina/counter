export type CounterState = {
	value1: number
	value2: number
    value3: number
    value4: number
}

export enum CounterTypes {
	INCREMENT = 'counter|increment',
	DECREMENT = 'counter|decrement',
	INCREMENT1 = 'counter|increment1',
	DECREMENT1 = 'counter|decrement1',
}

export enum CheckboxTypes {
    CHECKED = 'checkbox|checked',
};

export enum SwitchTypes {
    CHANGED = 'switch|changed',
};