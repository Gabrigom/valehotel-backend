import mongoose from "mongoose";

const Booking = new mongoose.Schema({
    bookingRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        require: true
    },
    bookingCostumer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Costumer',
        require: true
    },
    bookingCheckin: Date,
    bookingCheckout: Date,
    bookingPeople: Number,
    bookingDemand: String,
    bookingPrice: Number,
    bookingPayment: Boolean
})