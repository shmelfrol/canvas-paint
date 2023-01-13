import React, {useEffect, useRef, useState} from 'react';
import "../styles/canvas.scss"
import {useDispatch, useSelector} from "react-redux";
import {pushUndo, setCanvas, setSessionId, setSocket, setUserName} from "../redux/actionCreators/canvas";
import {setTool} from "../redux/actionCreators/paint";
import Brush from "../tools/Brush";
import {Button, Modal} from "react-bootstrap";
import {useParams} from "react-router-dom";
import Rect from "../tools/Rect";

const Canvas = () => {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    const usernameRef = useRef()
    const [modal, Setmodal] = useState(true)
    const params = useParams()
    const username = useSelector(state => state.canvas.username)
    const tool=useSelector(state=>state.paint.tool)
    console.log("tool!!!!!!", tool)

    useEffect(() => {
        dispatch(setCanvas(canvasRef.current))

    })


    useEffect(() => {

        if(username){
            const socket = new WebSocket(`ws://localhost:5555/`)
            console.log("socket", socket)
            console.log("params", params)
            dispatch(setSocket(socket))
            dispatch(setSessionId(params.id))
            dispatch(setTool(new Brush(canvasRef.current, socket, params.id)))
            socket.onopen = () => {
                console.log("connection established")
                socket.send(JSON.stringify({
                    id: params.id,
                    username: username,
                    method: "connection"
                }))
            }
            socket.onmessage = (event) => {
               let msg=JSON.parse(event.data)
                console.log("Canvas onmes",msg)
                switch (msg.method){
                    case "connection":
                        console.log(` user ${msg.username} conected!!!`)
                        break
                    case "draw":{
                        console.log("draw")
                       drawHandler(msg, tool)
                    }
                }



            }

        }

    }, [username])


    const drawHandler = (msg, tool) =>{
           const figure = msg.figure
        const ctx = canvasRef.current.getContext("2d")
        console.log("tool",tool)
        console.log("ctx",ctx)
        console.log("figure", figure)
        switch (figure.type){
            case "brush":
                Brush.draw(ctx, figure.x, figure.y, figure.color)
                break
            case "rect":
                console.log("RECT")
                Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height, figure.color)
                break
            case "finish":
               ctx.beginPath()
                break


        }
    }


    const mouseDownHandler = () => {
        dispatch(pushUndo(canvasRef.current.toDataURL()))
    }
    const connectHandler = () => {
        console.log("uerREF", usernameRef.current.value)
        dispatch(setUserName(usernameRef.current.value))
        Setmodal(false)

    }

    const show = () => {

    }


    return (
        <div className="canvas">
            <Modal show={modal} onHide={() => {
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input ref={usernameRef} type={"text"}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={connectHandler}>
                        Войти
                    </Button>

                </Modal.Footer>
            </Modal>


            <canvas ref={canvasRef} width={600} height={600} onMouseDown={mouseDownHandler}>

            </canvas>
        </div>
    );
};

export default Canvas;