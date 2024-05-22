import express from "express"
import costumerController from "../controllers/costumerController.js"

const costumerRoutes = express.Router()

costumerRoutes.get("/view", costumerController.getAllCostumers)

costumerRoutes.post("/create", costumerController.createCostumer)

costumerRoutes.delete("/delete/:id", costumerController.deleteCostumer)

costumerRoutes.put("/update/:id", costumerController.updateCostumer)

costumerRoutes.get("/view/:id", costumerController.getOneCostumer)

export default costumerRoutes