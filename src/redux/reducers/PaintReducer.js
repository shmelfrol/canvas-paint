import {ACTIONS} from "../actionCreators";

export const TOOLS = {
    brush: "brush",
    rect: "rect",
    circle: "circle",
    eraser:"eraser",
    line: "line"
}


const initialState ={
    tool: TOOLS.brush
}

export const paintReducer = (state=initialState, action) => {
    switch (action.type){
        case ACTIONS.SET_TOOL: return {
            ...state, tool: action.payload
        }
        default: return state
    }
}