import mongoose from "mongoose"
import booking from "../models/booking.js"

const Booking = mongoose.model("booking", booking)

class BookingServices{
    SelectAll(){
        return Booking.find()
    }

    SelectOne(id){
        return Booking.findOne({_id: id})
    }

    Delete(id){
        return Booking.findByIdAndDelete(id)
    }

    Create(data){
        const newBooking = new Camera(data)
        return newBooking.save()
    }

    Update(id, data){
        return Booking.findByIdAndUpdate(id, data)
    }
}

export default new BookingServices()