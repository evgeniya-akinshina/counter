export type CounterState = {
    value: number
}

export enum CounterTypes {
    ACTION_TYPE_INCREMENT = "counter|actionTypeIncrement",
    ACTION_TYPE_DECREMENT = "counter|actionTypeDecrement",
    COUNTER__START = "counter|counter:start",
    COUNTER__SUCCESS = "counter|counter:success",
    COUNTER__FAILURE = "counter|counter:failue",
}