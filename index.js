import express from "express"
import mongoose from "mongoose"

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/room", RoomController)
app.use("/type", TypeController)
app.use("/costume", CostumerController)
app.use("/booking", BookingController)

mongoose.connect("mongodb://localhost:27017/vale-hotel")

app.listen(4000, (erro) => {
    if(erro){
        console.log("Erro: " + erro)
    }
    else{
        console.log("API rodando: http:localhost:4000")
    }
})