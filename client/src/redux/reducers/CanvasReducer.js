import {ACTIONS} from "../actionCreators";

const initialState = {
    canvas: null,
    undoList: [],
    redoList: [],
    username: null,
    sessionId: null,
    socket: null

}

export const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_CANVAS:
            return {
                ...state, canvas: action.payload
            }
        case ACTIONS.SET_USERNAME:
            return {
                ...state, username: action.payload
            }
        case ACTIONS.SET_SESSION_ID:
            return {
                ...state, sessionId: action.payload
            }
        case ACTIONS.SET_SOCKET:
            return {
                ...state, socket: action.payload
            }
        case ACTIONS.PUSH_REDO: {
            state.redoList.push(action.payload)
            return state
        }
        case ACTIONS.PUSH_UNDO: {
            state.undoList.push(action.payload)
            return state
        }
        case ACTIONS.UNDO: {
            console.log("UNDO")
            let ctx = state.canvas.getContext('2d')
            if (state.undoList.length > 0) {
                let dataUrl = state.undoList.pop()
                state.redoList.push(state.canvas.toDataURL())

                let img = new Image()
                img.src = dataUrl
                img.onload = () => {
                    ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
                    ctx.drawImage(img, 0, 0, state.canvas.width, state.canvas.height)
                }
            } else {
                ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
            }
            return state
        }
        case ACTIONS.REDO: {
            console.log("REDO")
            let ctx = state.canvas.getContext('2d')
            if (state.redoList.length > 0) {
                let dataUrl = state.redoList.pop()
                state.undoList.push(state.canvas.toDataURL())
                let img = new Image()
                img.src = dataUrl
                img.onload = () => {
                    ctx.clearRect(0, 0, state.canvas.width, state.canvas.height)
                    ctx.drawImage(img, 0, 0, state.canvas.width, state.canvas.height)
                }
            }
            return state
        }

        default:
            return state
    }
}