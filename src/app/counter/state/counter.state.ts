export interface CounterState{
    counter: number;
    channelName:string;
}


export const initialState:CounterState  = {
    counter: 2,
    channelName: 'YouTube'
}