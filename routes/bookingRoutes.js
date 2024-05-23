import express from "express"
import bookingController from "../controllers/bookingController.js"

const bookingRoutes = express.Router()

bookingRoutes.get("/view", bookingController.getAllBookings)
bookingRoutes.get("/view/:id", bookingController.getOneBooking)
bookingRoutes.get("/view/booking/:id", bookingController.getCostumerBookings)
bookingRoutes.get("/view/room/:id", bookingController.getRoomBookings)

bookingRoutes.post("/create", bookingController.createBooking)

bookingRoutes.delete("/delete/:id", bookingController.deleteBooking)

bookingRoutes.put("/update/:id", bookingController.updateBooking)

export default bookingRoutes
