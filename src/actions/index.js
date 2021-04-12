export const ADD = "ADD";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE = "TOGGLE";

export const add=(item)=>{
    return {type:ADD, payload:item}
};
export const toggle=(item)=>{
    return {type:TOGGLE, payload:item}
};
export const clearCompleted=()=>{
    return {type:CLEAR_COMPLETED}
}