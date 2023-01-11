import { composeWithDevTools } from 'redux-devtools-extension';
import {
    applyMiddleware, combineReducers, createStore,
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import {paintReducer} from "./reducers/PaintReducer";
import {canvasReducer} from "./reducers/CanvasReducer";

const reducers = combineReducers({
    paint: paintReducer,
    canvas: canvasReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;