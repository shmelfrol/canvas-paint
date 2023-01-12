import {ACTIONS} from "./index";


export const setTool =(tool) => ({
    type: ACTIONS.SET_TOOL,
    payload: tool
})


export const setFillColor =(color) => ({
    type: ACTIONS.SET_FILL_COLOR,
    payload: color
})
export const setStrokeColor =(color) => ({
    type: ACTIONS.SET_STROKE_COLOR,
    payload: color
})
export const setWidth =(width) => ({
    type: ACTIONS.SET_WIDTH,
    payload: width
})