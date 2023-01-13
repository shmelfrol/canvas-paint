const express = require('express')
const app = express()

const WSserver = require("express-ws")(app)
const aWss = WSserver.getWss()

app.ws('/', (ws, req) => {
    console.log(`Подключение установлено `)
    ws.send('Ты успешно подключился')
    ws.on('message', (msg) => {
        console.log("поймали сообщение с клиента")
        console.log(JSON.parse(msg))

        msg = JSON.parse(msg)
        switch (msg.method) {
            case "connection": {
                console.log("connection")
                connectionHandler(ws, msg)
              break
            }
            case "message": {
                console.log("message", msg)
             break
            }
            case "draw": {
                broadCastConnection(ws, msg)
                break
            }

        }


    })

})

const PORT = process.env.PORT || 5555

app.listen(PORT, () => console.log(`server start on PORT ${PORT}`))


const connectionHandler= (ws, msg)=>{
    ws.id = msg.id
    broadCastConnection(ws, msg)



}

const broadCastConnection = (ws, msg)=> {
  aWss.clients.forEach((client)=>{
      if(client.id === msg.id){
          client.send(JSON.stringify(msg))
      }


  })
}