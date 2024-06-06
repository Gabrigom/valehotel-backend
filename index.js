import express from "express"
import session from "express-session"
import mongoose from "mongoose"
import cors from "cors"
import middlewares from "./middlewares/middlewares.js";

const app = express()

import roomRoutes from "./routes/roomRoutes.js"
import patternRoutes from "./routes/patternRoutes.js"
import costumerRoutes from "./routes/costumerRoutes.js"
import bookingRoutes from "./routes/bookingRoutes.js"

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({
    secret: 'hotel',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000, 
        secure: false 
    }
}));

const openRoutes = ['/costumer/login', '/costumer/logout'];
app.use((req, res, next) => {
    if (openRoutes.includes(req.path)) {
      return next();
    }    
    middlewares.authenticate(req, res, next)
});

app.use("/room", roomRoutes)
app.use("/pattern", patternRoutes)
app.use("/costumer", costumerRoutes)
app.use("/booking", bookingRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/vale-hotel")

app.get("/", (req, res) =>{
    res.send(res.session.user);
});

app.listen(4000, (erro) => {
    if(erro){
        console.log("Erro: " + erro)
    }
    else{
        console.log("API rodando: http:localhost:4000")
    }
})