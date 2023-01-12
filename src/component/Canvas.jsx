import React, {useEffect, useRef} from 'react';
import "../styles/canvas.scss"
import {useDispatch, useSelector} from "react-redux";
import {pushUndo, setCanvas} from "../redux/actionCreators/canvas";
import {setTool} from "../redux/actionCreators/paint";
import Brush from "../tools/Brush";
const Canvas = () => {
    const dispatch = useDispatch()
    const canvasRef = useRef()


    useEffect(()=>{
  dispatch(setCanvas(canvasRef.current))
        dispatch(setTool(new Brush(canvasRef.current)))
    })


    const mouseDownHandler = () =>{
        dispatch(pushUndo(canvasRef.current.toDataURL()))
    }


    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={600} height={600} onMouseDown={mouseDownHandler}>

            </canvas>
        </div>
    );
};

export default Canvas;