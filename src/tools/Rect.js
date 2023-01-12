import Tool from "./Tools";

export default class Rect extends Tool {
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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        //сохранили все предыдущие рисунки
        this.saved = this.canvas.toDataURL()
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX;
            let height = currentY - this.startY;
            this.draw(this.startX, this.startY, width, height)

        }
    }

    draw(x, y, w,h) {
        const img = new Image()
        img.src = this.saved
        img.onload=()=>{
            //очистили от всего
            this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
            //нарисовали до нажатия мыша рисунки
            this.ctx.drawImage(img, 0,0,this.canvas.width, this.canvas.height)
                //начали рисовать
            this.ctx.beginPath()
            this.ctx.rect(x,y,w,h)
            this.ctx.fill()
            this.stroke()
            console.log("draw brush")


        }

    }

}