import {ACTIONS} from "../actionCreators";

export const TOOLS = {
    brush: "brush",
    rect: "rect",
    circle: "circle",
    eraser:"eraser",
    line: "line"
}


const initialState ={
    tool: null

}

export const paintReducer = (state=initialState, action) => {
    switch (action.type){
        case ACTIONS.SET_TOOL: return {
            ...state, tool: action.payload
        }
        case ACTIONS.SET_FILL_COLOR: {
            console.log(action.payload)
            state.tool.fillColor=action.payload
            return state
        }
        case ACTIONS.SET_STROKE_COLOR:  {
            state.tool.strokeColor=action.payload
            return state
        }
        case ACTIONS.SET_WIDTH: {
            state.tool.lineWidth=action.payload
            return state

        }
        default: return state
    }
}