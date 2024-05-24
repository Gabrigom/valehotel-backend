import express from "express"
import costumerController from "../controllers/costumerController.js"

const costumerRoutes = express.Router()

costumerRoutes.get("/view", costumerController.getAllCostumers)
costumerRoutes.get("/view/:id", costumerController.getOneCostumer)

costumerRoutes.post("/create", costumerController.createCostumer)
costumerRoutes.post("/login", costumerController.loginCostumer)
costumerRoutes.post("/logout", costumerController.logoutCostumer)

costumerRoutes.delete("/delete/:id", costumerController.deleteCostumer)

costumerRoutes.put("/update/:id", costumerController.updateCostumer)

export default costumerRoutes
