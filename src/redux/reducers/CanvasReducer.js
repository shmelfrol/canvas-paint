import {ACTIONS} from "../actionCreators";

const initialState ={
    canvas: null
}

export const canvasReducer = (state=initialState, action) => {
    switch (action.type){
        case ACTIONS.SET_CANVAS: return {
            ...state, canvas: action.payload
        }
        default: return state
    }
}