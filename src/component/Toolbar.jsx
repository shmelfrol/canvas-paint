import React, {useState} from 'react';
import "../styles/toolbar.scss"
import {useDispatch, useSelector} from "react-redux";
import {setTool} from "../redux/actionCreators/paint";
import {TOOLS} from "../redux/reducers/PaintReducer";

const Toolbar = () => {
    const dispatch = useDispatch()
    const paintState = useSelector((state)=>state.paint.tool)
   //console.log(paintState)

    const clickHandler = (e) => {
        e.preventDefault()
        let target = e.target
      dispatch(setTool(target.name))
    }

    return (
        <div className="toolBar">
            <button className="toolBar__btn brush" onClick={clickHandler} name={TOOLS.brush}></button>
            <button className="toolBar__btn rect" onClick={clickHandler} name={TOOLS.rect}></button>
            <button className="toolBar__btn circle" onClick={clickHandler} name={TOOLS.circle}></button>
            <button className="toolBar__btn eraser" onClick={clickHandler} name={TOOLS.eraser}></button>
            <button className="toolBar__btn line" onClick={clickHandler} name={TOOLS.line}></button>
            <input type="color" style={{margin:"5px"}}/>
            <button className="toolBar__btn undo"></button>
            <button className="toolBar__btn redo"></button>
            <button className="toolBar__btn save"></button>
        </div>
    );
};

export default Toolbar;