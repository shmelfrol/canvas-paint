import React, {useState} from 'react';
import "../styles/toolbar.scss"
import {useDispatch, useSelector} from "react-redux";
import {setFillColor, setStrokeColor, setTool} from "../redux/actionCreators/paint";
import {TOOLS} from "../redux/reducers/PaintReducer";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import {undo, redo} from "../redux/actionCreators/canvas";

const Toolbar = () => {
    const dispatch = useDispatch()
    const paintState = useSelector((state)=>state.paint.tool)

    const canvasState = useSelector(state => state.canvas)
    const strokeColor = useSelector(state => state.paint.canvas)

    const changeColorHandler= (e)=>{
        let color=e.target.value
        dispatch(setStrokeColor(color))
        dispatch(setFillColor(color))
    }

  const undoClickHandler =() =>{
        console.log("undo")
        dispatch(undo())
  }

    const redoClickHandler =() =>{
        console.log("redo!!!!!!!!!!!!!!!")
        dispatch(redo())
    }

    return (
        <div className="toolBar">
            <button className="toolBar__btn brush" onClick={()=>{dispatch(setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionId)))}} name={TOOLS.brush}></button>
            <button className="toolBar__btn rect" onClick={()=>{dispatch(setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionId)))}} name={TOOLS.rect}></button>
            <button className="toolBar__btn circle" onClick={()=>{dispatch(setTool(new Circle(canvasState.canvas, canvasState.socket, canvasState.sessionId)))}} name={TOOLS.circle}></button>
            <button className="toolBar__btn eraser" onClick={()=>{dispatch(setTool(new Line(canvasState.canvas, canvasState.socket, canvasState.sessionId)))}} name={TOOLS.eraser}></button>
            <button className="toolBar__btn line"  name={TOOLS.line}></button>
            <input type="color" style={{margin:"5px"}} onChange={changeColorHandler}/>
            <button className="toolBar__btn undo" onClick={undoClickHandler}></button>
            <button className="toolBar__btn redo" onClick={redoClickHandler}></button>
            <button className="toolBar__btn save"></button>
        </div>
    );
};

export default Toolbar;