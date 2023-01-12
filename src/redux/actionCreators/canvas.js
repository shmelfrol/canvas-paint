import {ACTIONS} from "./index";


export const setCanvas =(canvas) => ({
    type: ACTIONS.SET_CANVAS,
    payload: canvas
})

export const pushRedo =(redo)=>  ({
    type: ACTIONS.PUSH_REDO,
    payload: redo
})

export const pushUndo =(undo)=>  ({
    type: ACTIONS.PUSH_UNDO,
    payload: undo
})


export const undo =()=>({
    type: ACTIONS.UNDO
})



export const redo =()=>({
    type: ACTIONS.REDO
})
