import express from "express"
import patternController from "../controllers/patternController.js"

const patternRoutes = express.Router()

patternRoutes.get("/view", patternController.getAllPatterns)

patternRoutes.post("/create", patternController.createPattern)

patternRoutes.delete("/delete/:id", patternController.deletePattern)

patternRoutes.put("/update/:id", patternController.updatePattern)

patternRoutes.get("/view/:id", patternController.getOnePattern)

export default patternRoutes