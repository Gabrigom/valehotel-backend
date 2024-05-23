import mongoose from "mongoose"
import booking from "../models/booking.js"

const Booking = mongoose.model("booking", booking)

class BookingServices{
    SelectAll(){
        return Booking.find()
    }

    SelectAllByCostumer(id){
        return Booking.find({bookingCostumer: id}).populate("bookingCostumer")
    }

    SelectAllByRoom(id){
        return Booking.find({bookingRoom: id}).populate("bookingRoom")
    }

    SelectOne(id){
        return Booking.findOne({_id: id}).populate("bookingCostumer").populate("bookingRoom")
    }

    Delete(id){
        return Booking.findByIdAndDelete(id)
    }

    Create(data){
        const newBooking = new Booking(data)
        return newBooking.save()
    }

    Update(id, data){
        return Booking.findByIdAndUpdate(id, data)
    }
}

export default new BookingServices()