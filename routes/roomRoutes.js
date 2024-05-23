import express from "express"
import roomController from "../controllers/roomController.js"

const roomRoutes = express.Router()

roomRoutes.get("/view", roomController.getAllRooms)
roomRoutes.get("/view/:id", roomController.getOneRoom)

roomRoutes.post("/create", roomController.createRoom)

roomRoutes.delete("/delete/:id", roomController.deleteRoom)

roomRoutes.put("/update/:id", roomController.updateRoom)

export default roomRoutes
