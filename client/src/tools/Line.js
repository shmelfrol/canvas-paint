import Tool from "./Tools";

export default class Line extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen()
    }


    listen() {
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    }


    mouseUpHandler(e) {
        this.mouseDown = false
        this.mouseUp = true
    }

    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX-e.target.offsetLeft, e.pageY- e.target.offsetTop)
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.pageX-e.target.offsetLeft, e.pageY- e.target.offsetTop)
        }
    }

    draw(x,y){
        this.ctx.lineTo(x, y)
        this.ctx.strokeStyle="white"
        this.ctx.stroke()
        console.log("draw brush")
    }

}