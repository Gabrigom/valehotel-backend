import express from "express"
import mongoose from "mongoose"

const app = express()

import roomRoutes from "./routes/roomRoutes.js"
import patternRoutes from "./routes/patternRoutes.js"
import costumerRoutes from "./routes/costumerRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/room", roomRoutes)
app.use("/pattern", patternRoutes)
app.use("/costumer", costumerRoutes)
app.use("/booking", bookingRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/vale-hotel")

app.get("/", (req, res) =>{
    res.send("Oi Mundo");
});

app.listen(4000, (erro) => {
    if(erro){
        console.log("Erro: " + erro)
    }
    else{
        console.log("API rodando: http:localhost:4000")
    }
})